"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResource = void 0;
function mapUser(r) {
    const u = {
        id: r.id,
        tenantId: String(r.tenant_id ?? r.tenantId ?? ''),
        email: r.email,
        role: r.role,
        isActive: Boolean(r.is_active ?? r.isActive),
        isEmailVerified: Boolean(r.is_email_verified ?? r.isEmailVerified),
        failedLoginAttempts: Number(r.failed_login_attempts ?? r.failedLoginAttempts ?? 0),
        createdAt: String(r.created_at ?? r.createdAt ?? ''),
        updatedAt: String(r.updated_at ?? r.updatedAt ?? ''),
    };
    const firstName = (r.first_name ?? r.firstName);
    if (firstName)
        u.firstName = firstName;
    const lastName = (r.last_name ?? r.lastName);
    if (lastName)
        u.lastName = lastName;
    const username = r.username;
    if (username)
        u.username = username;
    const displayName = (r.display_name ?? r.displayName);
    if (displayName)
        u.displayName = displayName;
    const mfaMethod = (r.mfa_method ?? r.mfaMethod);
    if (mfaMethod === 'totp')
        u.mfaMethod = 'totp';
    const lockedUntil = (r.locked_until ?? r.lockedUntil);
    if (lockedUntil)
        u.lockedUntil = lockedUntil;
    const lastLoginAt = (r.last_login_at ?? r.lastLoginAt);
    if (lastLoginAt)
        u.lastLoginAt = lastLoginAt;
    const avatarUrl = (r.avatar_url ?? r.avatarUrl);
    if (avatarUrl)
        u.avatarUrl = avatarUrl;
    return u;
}
class UsersResource {
    client;
    tenantId;
    constructor(client, tenantId) {
        this.client = client;
        this.tenantId = tenantId;
    }
    path(suffix = '') {
        return `/api/v1/tenants/${this.tenantId}/users${suffix}`;
    }
    async list(opts = {}) {
        const params = { page: opts.page ?? 1, page_size: opts.pageSize ?? 20 };
        if (opts.search)
            params.search = opts.search;
        const raw = await this.client.get(this.path(), params);
        const users = (raw.users ?? []).map(mapUser);
        return { data: users, total: raw.total ?? users.length, page: raw.page, pageSize: raw.page_size };
    }
    async get(userId) {
        return mapUser(await this.client.get(this.path(`/${userId}`)));
    }
    update(userId, data) {
        const body = {};
        if (data.firstName !== undefined)
            body.first_name = data.firstName;
        if (data.lastName !== undefined)
            body.last_name = data.lastName;
        if (data.username !== undefined)
            body.username = data.username;
        if (data.role !== undefined)
            body.role = data.role;
        if (data.isActive !== undefined)
            body.is_active = data.isActive;
        return this.client.put(this.path(`/${userId}`), body);
    }
    delete(userId) {
        return this.client.delete(this.path(`/${userId}`));
    }
}
exports.UsersResource = UsersResource;
//# sourceMappingURL=users.js.map