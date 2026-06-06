"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogsResource = void 0;
function mapAuditLog(r) {
    return {
        id: r.id,
        tenantId: r.tenant_id || r.tenantId,
        userId: r.user_id || r.userId,
        action: r.action,
        ip: r.ip,
        userAgent: r.user_agent || r.userAgent,
        metadata: r.metadata,
        createdAt: r.created_at || r.createdAt,
    };
}
class AuditLogsResource {
    client;
    tenantId;
    constructor(client, tenantId) {
        this.client = client;
        this.tenantId = tenantId;
    }
    path(suffix = '') {
        return `/api/v1/tenants/${this.tenantId}/audit-logs${suffix}`;
    }
    async list(options) {
        const query = new URLSearchParams();
        if (options?.page)
            query.set('page', options.page.toString());
        if (options?.pageSize)
            query.set('page_size', options.pageSize.toString());
        if (options?.userId)
            query.set('user_id', options.userId);
        if (options?.action)
            query.set('action', options.action);
        const q = query.toString();
        const uri = q ? `${this.path()}?${q}` : this.path();
        const raw = await this.client.get(uri);
        return {
            data: (raw.data || []).map(mapAuditLog),
            total: raw.total || 0,
            page: raw.page || 1,
            pageSize: raw.page_size || 20,
        };
    }
}
exports.AuditLogsResource = AuditLogsResource;
//# sourceMappingURL=auditLogs.js.map