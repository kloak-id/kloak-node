import type { ApiClient } from './client.js';
import type { User, Paginated } from '../types/index.js';
export interface ListUsersOptions {
    page?: number;
    pageSize?: number;
    search?: string;
}
export interface UpdateUserOptions {
    firstName?: string;
    lastName?: string;
    username?: string;
    role?: User['role'];
    isActive?: boolean;
}
export declare class UsersResource {
    private client;
    private tenantId;
    constructor(client: ApiClient, tenantId: string);
    private path;
    list(opts?: ListUsersOptions): Promise<Paginated<User>>;
    get(userId: string): Promise<User>;
    update(userId: string, data: UpdateUserOptions): Promise<User>;
    delete(userId: string): Promise<void>;
}
//# sourceMappingURL=users.d.ts.map