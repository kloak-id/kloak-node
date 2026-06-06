"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KloakAdmin = exports.AuditLogsResource = exports.OrganizationsResource = exports.ApplicationsResource = exports.WebhooksResource = exports.RbacResource = exports.SessionsResource = exports.TenantsResource = exports.UsersResource = exports.verifyWebhookSignature = exports.verifyToken = exports.KloakApiError = void 0;
var client_js_1 = require("./admin/client.js");
Object.defineProperty(exports, "KloakApiError", { enumerable: true, get: function () { return client_js_1.KloakApiError; } });
var verify_js_1 = require("./auth/verify.js");
Object.defineProperty(exports, "verifyToken", { enumerable: true, get: function () { return verify_js_1.verifyToken; } });
var verify_js_2 = require("./webhooks/verify.js");
Object.defineProperty(exports, "verifyWebhookSignature", { enumerable: true, get: function () { return verify_js_2.verifyWebhookSignature; } });
const client_js_2 = require("./admin/client.js");
const users_js_1 = require("./admin/users.js");
Object.defineProperty(exports, "UsersResource", { enumerable: true, get: function () { return users_js_1.UsersResource; } });
const tenants_js_1 = require("./admin/tenants.js");
Object.defineProperty(exports, "TenantsResource", { enumerable: true, get: function () { return tenants_js_1.TenantsResource; } });
const sessions_js_1 = require("./admin/sessions.js");
Object.defineProperty(exports, "SessionsResource", { enumerable: true, get: function () { return sessions_js_1.SessionsResource; } });
const rbac_js_1 = require("./admin/rbac.js");
Object.defineProperty(exports, "RbacResource", { enumerable: true, get: function () { return rbac_js_1.RbacResource; } });
const webhooks_js_1 = require("./admin/webhooks.js");
Object.defineProperty(exports, "WebhooksResource", { enumerable: true, get: function () { return webhooks_js_1.WebhooksResource; } });
const applications_js_1 = require("./admin/applications.js");
Object.defineProperty(exports, "ApplicationsResource", { enumerable: true, get: function () { return applications_js_1.ApplicationsResource; } });
const organizations_js_1 = require("./admin/organizations.js");
Object.defineProperty(exports, "OrganizationsResource", { enumerable: true, get: function () { return organizations_js_1.OrganizationsResource; } });
const auditLogs_js_1 = require("./admin/auditLogs.js");
Object.defineProperty(exports, "AuditLogsResource", { enumerable: true, get: function () { return auditLogs_js_1.AuditLogsResource; } });
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
class KloakAdmin {
    client;
    tenants;
    constructor(config) {
        this.client = new client_js_2.ApiClient(config);
        this.tenants = new tenants_js_1.TenantsResource(this.client);
    }
    /**
     * Scope all subsequent calls to a specific tenant.
     */
    for(tenantId) {
        return {
            users: new users_js_1.UsersResource(this.client, tenantId),
            sessions: new sessions_js_1.SessionsResource(this.client, tenantId),
            rbac: new rbac_js_1.RbacResource(this.client, tenantId),
            webhooks: new webhooks_js_1.WebhooksResource(this.client, tenantId),
            applications: new applications_js_1.ApplicationsResource(this.client, tenantId),
            organizations: new organizations_js_1.OrganizationsResource(this.client, tenantId),
            auditLogs: new auditLogs_js_1.AuditLogsResource(this.client, tenantId),
        };
    }
}
exports.KloakAdmin = KloakAdmin;
//# sourceMappingURL=index.js.map