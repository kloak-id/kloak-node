export type { KloakConfig, User, Tenant, Session, Role, Permission, PasswordPolicy, TenantConfig, WebhookConfig, AuditLog, Paginated, TokenClaims, KloakError } from './types/index.js';
export { KloakApiError } from './admin/client.js';
export { verifyToken } from './auth/verify.js';
export { verifyWebhookSignature } from './webhooks/verify.js';
import { UsersResource } from './admin/users.js';
import { TenantsResource } from './admin/tenants.js';
import { SessionsResource } from './admin/sessions.js';
import { RbacResource } from './admin/rbac.js';
import { WebhooksResource } from './admin/webhooks.js';
import { ApplicationsResource } from './admin/applications.js';
import { OrganizationsResource } from './admin/organizations.js';
import { AuditLogsResource } from './admin/auditLogs.js';
import type { KloakConfig } from './types/index.js';
export { UsersResource, TenantsResource, SessionsResource, RbacResource, WebhooksResource, ApplicationsResource, OrganizationsResource, AuditLogsResource };
/**
 * Kloak.id Admin SDK client.
 *
 * @example
 * ```ts
 * import { KloakAdmin } from '@kloak.id/node';
 *
 * const kloak = new KloakAdmin({
 *   baseUrl: 'https://auth.example.com',
 *   apiKey: process.env.KLOAK_API_KEY!,
 * });
 *
 * const users = await kloak.for('tenant-id').users.list();
 * ```
 */
export declare class KloakAdmin {
    private client;
    readonly tenants: TenantsResource;
    constructor(config: KloakConfig);
    /**
     * Scope all subsequent calls to a specific tenant.
     */
    for(tenantId: string): {
        users: UsersResource;
        sessions: SessionsResource;
        rbac: RbacResource;
        webhooks: WebhooksResource;
        applications: ApplicationsResource;
        organizations: OrganizationsResource;
        auditLogs: AuditLogsResource;
    };
}
//# sourceMappingURL=index.d.ts.map