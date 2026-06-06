import type { ApiClient } from './client.js';
import type { Role, Permission } from '../types/index.js';
export declare class RbacResource {
    private client;
    private tenantId;
    constructor(client: ApiClient, tenantId: string);
    private rolesPath;
    private permissionsPath;
    createRole(data: {
        name: string;
        description?: string;
    }): Promise<Role>;
    listRoles(): Promise<Role[]>;
    getRole(roleId: string): Promise<Role>;
    deleteRole(roleId: string): Promise<void>;
    createPermission(data: {
        resource: string;
        action: string;
        name?: string;
        description?: string;
        type?: string;
    }): Promise<Permission>;
    listPermissions(): Promise<Permission[]>;
    addPermissionToRole(roleId: string, permissionId: string): Promise<{
        status: string;
    }>;
    listRolePermissions(roleId: string): Promise<Permission[]>;
    assignRole(userId: string, roleId: string, assignedBy?: string): Promise<{
        status: string;
    }>;
    listUserRoles(userId: string): Promise<Role[]>;
    removeUserRole(userId: string, roleId: string): Promise<void>;
}
//# sourceMappingURL=rbac.d.ts.map