"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsResource = void 0;
function mapSession(r) {
    const s = {
        id: r.id,
        tenantId: String(r.tenant_id ?? r.tenantId ?? ''),
        userId: String(r.user_id ?? r.userId ?? ''),
        isActive: Boolean(r.is_active ?? r.isActive),
        expiresAt: String(r.expires_at ?? r.expiresAt ?? ''),
        createdAt: String(r.created_at ?? r.createdAt ?? ''),
    };
    const ip = r.ip;
    if (ip)
        s.ip = ip;
    const userAgent = (r.user_agent ?? r.userAgent);
    if (userAgent)
        s.userAgent = userAgent;
    return s;
}
class SessionsResource {
    client;
    tenantId;
    constructor(client, tenantId) {
        this.client = client;
        this.tenantId = tenantId;
    }
    path(suffix = '') {
        return `/t/${this.tenantId}/sessions${suffix}`;
    }
    async list(userId) {
        const raw = await this.client.get(this.path(), { user_id: userId });
        return (raw ?? []).map(mapSession);
    }
    revoke(sessionId) {
        return this.client.delete(this.path(`/${sessionId}`));
    }
    revokeAll(userId) {
        return this.client.delete(this.path(), undefined, { user_id: userId });
    }
}
exports.SessionsResource = SessionsResource;
//# sourceMappingURL=sessions.js.map