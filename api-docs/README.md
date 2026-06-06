**@kloak.id/node**

***

# @kloak.id/node

The official backend SDK for Kloak.id. This SDK provides a comprehensive Node.js client for interacting with the Kloak Admin API, verifying JWT tokens, and validating webhook signatures.

## Installation

```bash
npm install @kloak.id/node
```

## Initialization

Import and initialize the `KloakAdmin` client with your base URL and API key.

```typescript
import { KloakAdmin } from '@kloak.id/node';

const kloak = new KloakAdmin({
  baseUrl: 'https://auth.yourdomain.com',
  apiKey: process.env.KLOAK_API_KEY!,
});
```

## Admin API Client

The Admin API is multi-tenant by design. To interact with resources belonging to a specific tenant, use the `for(tenantId)` method to scope your client.

### Users

Manage users within a tenant.

```typescript
// List users (with pagination and search)
const users = await kloak.for('tenant-id').users.list({
  page: 1,
  pageSize: 20,
  search: 'john.doe@example.com' // Optional search by email or name
});

// Get a specific user
const user = await kloak.for('tenant-id').users.get('user-123');

// Update a user
const updated = await kloak.for('tenant-id').users.update('user-123', {
  firstName: 'John',
  isActive: true
});

// Delete a user
await kloak.for('tenant-id').users.delete('user-123');
```

### Sessions

Manage active user sessions.

```typescript
// List active sessions for a user
const sessions = await kloak.for('tenant-id').sessions.listByUser('user-123');

// Revoke a specific session
await kloak.for('tenant-id').sessions.revoke('session-123');

// Revoke all sessions for a user
await kloak.for('tenant-id').sessions.revokeAllForUser('user-123');
```

### Role-Based Access Control (RBAC)

Manage roles, permissions, and assignments.

```typescript
// Roles
const roles = await kloak.for('tenant-id').rbac.listRoles();
const role = await kloak.for('tenant-id').rbac.createRole({ name: 'admin' });

// Permissions
const perms = await kloak.for('tenant-id').rbac.listPermissions();
await kloak.for('tenant-id').rbac.createPermission({ 
  name: 'read:users', 
  resource: 'users', 
  action: 'read' 
});

// Assignments
await kloak.for('tenant-id').rbac.assignRoleToUser('user-123', 'role-123');
const userRoles = await kloak.for('tenant-id').rbac.getUserRoles('user-123');
```

### Organizations & Applications

Manage hierarchical organizations and OAuth/OIDC clients.

```typescript
// List organizations
const orgs = await kloak.for('tenant-id').organizations.list();

// Create an application (OAuth client)
const app = await kloak.for('tenant-id').applications.create({
  name: 'My React App',
  clientType: 'public',
  grantTypes: ['authorization_code'],
  responseTypes: ['code'],
  redirectUris: ['http://localhost:3000/callback']
});
```

### Audit Logs & Webhooks

```typescript
// Fetch audit logs
const logs = await kloak.for('tenant-id').auditLogs.list({ limit: 50 });

// Manage webhooks
const webhooks = await kloak.for('tenant-id').webhooks.list();
```

---

## Utility Methods

### Token Verification

Verify JWT access tokens issued by Kloak on your backend securely. 

```typescript
import { verifyToken } from '@kloak.id/node';

try {
  const claims = await verifyToken(token, {
    jwksUri: 'https://auth.yourdomain.com/.well-known/jwks.json',
    issuer: 'https://auth.yourdomain.com',
    audience: 'your-api-audience'
  });
  
  console.log('Authenticated user:', claims.sub);
} catch (error) {
  console.error('Invalid or expired token', error);
}
```

### Webhook Signature Validation

Verify incoming webhook payloads to ensure they were genuinely sent by Kloak.

```typescript
import { verifyWebhookSignature } from '@kloak.id/node';

// In your Express or Next.js route handler
const signature = request.headers['kloak-signature'];
const rawBody = request.rawBody; // Make sure to use the raw unparsed string body

const isValid = verifyWebhookSignature(
  rawBody, 
  signature, 
  process.env.KLOAK_WEBHOOK_SECRET!
);

if (!isValid) {
  throw new Error('Invalid webhook signature');
}
```

## Error Handling

API errors are thrown as `KloakApiError` instances which include the HTTP status code and API error code.

```typescript
import { KloakApiError } from '@kloak.id/node';

try {
  await kloak.for('tenant-id').users.get('does-not-exist');
} catch (error) {
  if (error instanceof KloakApiError) {
    console.error(`Error ${error.status}: ${error.code} - ${error.message}`);
  }
}
```
