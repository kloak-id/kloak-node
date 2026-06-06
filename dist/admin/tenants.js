"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantsResource = void 0;
function mapTenant(r) {
    const t = {
        id: r.id,
        name: r.name,
        slug: r.slug,
        status: r.status,
        plan: r.plan,
        dnsVerified: Boolean(r.dns_verified ?? r.dnsVerified),
        maxUsers: Number(r.max_users ?? r.maxUsers),
        createdAt: String(r.created_at ?? r.createdAt ?? ''),
        updatedAt: String(r.updated_at ?? r.updatedAt ?? ''),
    };
    const subdomain = r.subdomain;
    if (subdomain)
        t.subdomain = subdomain;
    const customDomain = (r.custom_domain ?? r.customDomain);
    if (customDomain)
        t.customDomain = customDomain;
    const ownerId = (r.owner_id ?? r.ownerId);
    if (ownerId)
        t.ownerId = ownerId;
    return t;
}
class TenantsResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async list(opts = {}) {
        const raw = await this.client.get('/api/v1/tenants', {
            page: opts.page ?? 1,
            page_size: opts.pageSize ?? 20,
            ...(opts.status && { status: opts.status }),
            ...(opts.plan && { plan: opts.plan }),
            ...(opts.search && { search: opts.search }),
        });
        const tenants = (raw.tenants ?? []).map(mapTenant);
        return { data: tenants, total: tenants.length, page: raw.page, pageSize: raw.page_size };
    }
    async get(tenantId) {
        return mapTenant(await this.client.get(`/api/v1/tenants/${tenantId}`));
    }
    async getBySlug(slug) {
        return mapTenant(await this.client.get(`/api/v1/tenants/lookup/by-slug/${slug}`));
    }
    async getByDomain(domain) {
        return mapTenant(await this.client.get(`/api/v1/tenants/lookup/by-domain/${domain}`));
    }
    update(tenantId, data) {
        return this.client.put(`/api/v1/tenants/${tenantId}`, data);
    }
    setStatus(tenantId, status) {
        return this.client.put(`/api/v1/tenants/${tenantId}/status`, { status });
    }
    delete(tenantId) {
        return this.client.delete(`/api/v1/tenants/${tenantId}`);
    }
    stats() {
        return this.client.get('/api/v1/tenants/stats');
    }
}
exports.TenantsResource = TenantsResource;
//# sourceMappingURL=tenants.js.map