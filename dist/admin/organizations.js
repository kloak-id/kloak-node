"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsResource = void 0;
function mapOrganization(r) {
    return {
        id: r.id,
        tenantId: r.tenant_id || r.tenantId,
        parentId: r.parent_id || r.parentId,
        name: r.name,
        code: r.code,
        description: r.description,
        metadata: r.metadata,
        createdAt: r.created_at || r.createdAt,
        updatedAt: r.updated_at || r.updatedAt,
    };
}
class OrganizationsResource {
    client;
    tenantId;
    constructor(client, tenantId) {
        this.client = client;
        this.tenantId = tenantId;
    }
    path(suffix = '') {
        return `/api/v1/tenants/${this.tenantId}/organizations${suffix}`;
    }
    async list() {
        const raw = await this.client.get(this.path());
        return (raw || []).map(mapOrganization);
    }
    async get(orgId) {
        const raw = await this.client.get(this.path(`/${orgId}`));
        return mapOrganization(raw);
    }
    async create(data) {
        const body = {
            name: data.name,
            code: data.code,
            parent_id: data.parentId,
            description: data.description,
            metadata: data.metadata,
        };
        const raw = await this.client.post(this.path(), body);
        return mapOrganization(raw);
    }
    async update(orgId, data) {
        const body = {};
        if (data.name !== undefined)
            body.name = data.name;
        if (data.code !== undefined)
            body.code = data.code;
        if (data.parentId !== undefined)
            body.parent_id = data.parentId;
        if (data.description !== undefined)
            body.description = data.description;
        if (data.metadata !== undefined)
            body.metadata = data.metadata;
        const raw = await this.client.put(this.path(`/${orgId}`), body);
        return mapOrganization(raw);
    }
    async delete(orgId) {
        await this.client.delete(this.path(`/${orgId}`));
    }
}
exports.OrganizationsResource = OrganizationsResource;
//# sourceMappingURL=organizations.js.map