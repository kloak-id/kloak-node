import type { ApiClient } from './client.js';
import type { Role, Permission } from '../types/index.js';

type RawRole = Record<string, unknown>;
type RawPermission = Record<string, unknown>;

function mapRole(r: RawRole): Role {
  const role: Role = {
    id: r.id as string,
    tenantId: String(r.tenant_id ?? r.tenantId ?? ''),
    name: r.name as string,
    createdAt: String(r.created_at ?? r.createdAt ?? ''),
  };
  const description = r.description as string | undefined;
  if (description) role.description = description;
  return role;
}

function mapPermission(r: RawPermission): Permission {
  const perm: Permission = {
    id: r.id as string,
    tenantId: String(r.tenant_id ?? r.tenantId ?? ''),
    name: r.name as string,
    resource: r.resource as string,
    action: r.action as string,
    createdAt: String(r.created_at ?? r.createdAt ?? ''),
  };
  const description = r.description as string | undefined;
  if (description) perm.description = description;
  const type = r.type as string | undefined;
  if (type) perm.type = type;
  return perm;
}

export class RbacResource {
  constructor(
    private client: ApiClient,
    private tenantId: string,
  ) {}

  private rolesPath(suffix = '') {
    return `/api/v1/tenants/${this.tenantId}/roles${suffix}`;
  }

  private permissionsPath(suffix = '') {
    return `/api/v1/tenants/${this.tenantId}/permissions${suffix}`;
  }

  // Roles
  createRole(data: { name: string; description?: string }): Promise<Role> {
    return this.client.post(this.rolesPath(), data);
  }

  async listRoles(): Promise<Role[]> {
    const raw = await this.client.get<RawRole[]>(this.rolesPath());
    return (raw ?? []).map(mapRole);
  }

  async getRole(roleId: string): Promise<Role> {
    return mapRole(await this.client.get<RawRole>(this.rolesPath(`/${roleId}`)));
  }

  deleteRole(roleId: string): Promise<void> {
    return this.client.delete(this.rolesPath(`/${roleId}`));
  }

  // Permissions
  createPermission(data: {
    resource: string;
    action: string;
    name?: string;
    description?: string;
    type?: string;
  }): Promise<Permission> {
    return this.client.post(this.permissionsPath(), data);
  }

  async listPermissions(): Promise<Permission[]> {
    const raw = await this.client.get<RawPermission[]>(this.permissionsPath());
    return (raw ?? []).map(mapPermission);
  }

  // Role ↔ Permission assignments
  addPermissionToRole(roleId: string, permissionId: string): Promise<{ status: string }> {
    return this.client.post(this.rolesPath(`/${roleId}/permissions`), { permission_id: permissionId });
  }

  async listRolePermissions(roleId: string): Promise<Permission[]> {
    const raw = await this.client.get<RawPermission[]>(this.rolesPath(`/${roleId}/permissions`));
    return (raw ?? []).map(mapPermission);
  }

  // User ↔ Role assignments
  assignRole(userId: string, roleId: string, assignedBy?: string): Promise<{ status: string }> {
    return this.client.post(
      `/api/v1/tenants/${this.tenantId}/users/${userId}/roles`,
      { role_id: roleId, ...(assignedBy && { assigned_by: assignedBy }) },
    );
  }

  async listUserRoles(userId: string): Promise<Role[]> {
    const raw = await this.client.get<RawRole[]>(`/api/v1/tenants/${this.tenantId}/users/${userId}/roles`);
    return (raw ?? []).map(mapRole);
  }

  removeUserRole(userId: string, roleId: string): Promise<void> {
    return this.client.delete(
      `/api/v1/tenants/${this.tenantId}/users/${userId}/roles/${roleId}`,
    );
  }
}
