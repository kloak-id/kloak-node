import type { ApiClient } from './client.js';
import type { Organization, CreateOrganizationRequest, UpdateOrganizationRequest } from '../types/index.js';
export declare class OrganizationsResource {
    private client;
    private tenantId;
    constructor(client: ApiClient, tenantId: string);
    private path;
    list(): Promise<Organization[]>;
    get(orgId: string): Promise<Organization>;
    create(data: CreateOrganizationRequest): Promise<Organization>;
    update(orgId: string, data: UpdateOrganizationRequest): Promise<Organization>;
    delete(orgId: string): Promise<void>;
}
//# sourceMappingURL=organizations.d.ts.map