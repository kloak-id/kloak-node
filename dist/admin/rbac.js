"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RbacResource = void 0;
function mapRole(r) {
    const role = {
        id: r.id,
        tenantId: String(r.tenant_id ?? r.tenantId ?? ''),
        name: r.name,
        createdAt: String(r.created_at ?? r.createdAt ?? ''),
    };
    const description = r.description;
    if (description)
        role.description = description;
    return role;
}
function mapPermission(r) {
    const perm = {
        id: r.id,
        tenantId: String(r.tenant_id ?? r.tenantId ?? ''),
        name: r.name,
        resource: r.resource,
        action: r.action,
        createdAt: String(r.created_at ?? r.createdAt ?? ''),
    };
    const description = r.description;
    if (description)
        perm.description = description;
    const type = r.type;
    if (type)
        perm.type = type;
    return perm;
}
class RbacResource {
    client;
    tenantId;
    constructor(client, tenantId) {
        this.client = client;
        this.tenantId = tenantId;
    }
    rolesPath(suffix = '') {
        return `/api/v1/tenants/${this.tenantId}/roles${suffix}`;
    }
    permissionsPath(suffix = '') {
        return `/api/v1/tenants/${this.tenantId}/permissions${suffix}`;
    }
    // Roles
    createRole(data) {
        return this.client.post(this.rolesPath(), data);
    }
    async listRoles() {
        const raw = await this.client.get(this.rolesPath());
        return (raw ?? []).map(mapRole);
    }
    async getRole(roleId) {
        return mapRole(await this.client.get(this.rolesPath(`/${roleId}`)));
    }
    deleteRole(roleId) {
        return this.client.delete(this.rolesPath(`/${roleId}`));
    }
    // Permissions
    createPermission(data) {
        return this.client.post(this.permissionsPath(), data);
    }
    async listPermissions() {
        const raw = await this.client.get(this.permissionsPath());
        return (raw ?? []).map(mapPermission);
    }
    // Role ↔ Permission assignments
    addPermissionToRole(roleId, permissionId) {
        return this.client.post(this.rolesPath(`/${roleId}/permissions`), { permission_id: permissionId });
    }
    async listRolePermissions(roleId) {
        const raw = await this.client.get(this.rolesPath(`/${roleId}/permissions`));
        return (raw ?? []).map(mapPermission);
    }
    // User ↔ Role assignments
    assignRole(userId, roleId, assignedBy) {
        return this.client.post(`/api/v1/tenants/${this.tenantId}/users/${userId}/roles`, { role_id: roleId, ...(assignedBy && { assigned_by: assignedBy }) });
    }
    async listUserRoles(userId) {
        const raw = await this.client.get(`/api/v1/tenants/${this.tenantId}/users/${userId}/roles`);
        return (raw ?? []).map(mapRole);
    }
    removeUserRole(userId, roleId) {
        return this.client.delete(`/api/v1/tenants/${this.tenantId}/users/${userId}/roles/${roleId}`);
    }
}
exports.RbacResource = RbacResource;
//# sourceMappingURL=rbac.js.map