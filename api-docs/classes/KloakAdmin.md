[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / KloakAdmin

# Class: KloakAdmin

Defined in: src/index.ts:34

Kloak.id Admin SDK client.

## Example

```ts
import { KloakAdmin } from '@kloak.id/node';

const kloak = new KloakAdmin({
  baseUrl: 'https://auth.example.com',
  apiKey: process.env.KLOAK_API_KEY!,
});

const users = await kloak.for('tenant-id').users.list();
```

## Constructors

### Constructor

> **new KloakAdmin**(`config`): `KloakAdmin`

Defined in: src/index.ts:38

#### Parameters

##### config

[`KloakConfig`](../interfaces/KloakConfig.md)

#### Returns

`KloakAdmin`

## Properties

### tenants

> `readonly` **tenants**: [`TenantsResource`](TenantsResource.md)

Defined in: src/index.ts:36

## Methods

### for()

> **for**(`tenantId`): `object`

Defined in: src/index.ts:46

Scope all subsequent calls to a specific tenant.

#### Parameters

##### tenantId

`string`

#### Returns

`object`

##### applications

> **applications**: [`ApplicationsResource`](ApplicationsResource.md)

##### auditLogs

> **auditLogs**: [`AuditLogsResource`](AuditLogsResource.md)

##### organizations

> **organizations**: [`OrganizationsResource`](OrganizationsResource.md)

##### rbac

> **rbac**: [`RbacResource`](RbacResource.md)

##### sessions

> **sessions**: [`SessionsResource`](SessionsResource.md)

##### users

> **users**: [`UsersResource`](UsersResource.md)

##### webhooks

> **webhooks**: [`WebhooksResource`](WebhooksResource.md)
