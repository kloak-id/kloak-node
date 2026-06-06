import type { ApiClient } from './client.js';
import type { Tenant, Paginated } from '../types/index.js';
export interface ListTenantsOptions {
    page?: number;
    pageSize?: number;
    status?: Tenant['status'];
    plan?: Tenant['plan'];
    search?: string;
}
export interface UpdateTenantOptions {
    name?: string;
    plan?: Tenant['plan'];
    customDomain?: string;
    status?: Tenant['status'];
    maxUsers?: number;
}
export declare class TenantsResource {
    private client;
    constructor(client: ApiClient);
    list(opts?: ListTenantsOptions): Promise<Paginated<Tenant>>;
    get(tenantId: string): Promise<Tenant>;
    getBySlug(slug: string): Promise<Tenant>;
    getByDomain(domain: string): Promise<Tenant>;
    update(tenantId: string, data: UpdateTenantOptions): Promise<Tenant>;
    setStatus(tenantId: string, status: Tenant['status']): Promise<{
        status: string;
    }>;
    delete(tenantId: string): Promise<void>;
    stats(): Promise<{
        total: number;
        byPlan: Record<string, number>;
    }>;
}
//# sourceMappingURL=tenants.d.ts.map