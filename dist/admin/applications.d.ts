import type { ApiClient } from './client.js';
import type { Client, CreateClientRequest, UpdateClientRequest } from '../types/index.js';
export declare class ApplicationsResource {
    private client;
    private tenantId;
    constructor(client: ApiClient, tenantId: string);
    private path;
    list(): Promise<Client[]>;
    get(clientId: string): Promise<Client>;
    create(data: CreateClientRequest): Promise<Client & {
        clientSecret: string;
    }>;
    update(clientId: string, data: UpdateClientRequest): Promise<Client>;
    delete(clientId: string): Promise<void>;
    rotateSecret(clientId: string): Promise<{
        clientId: string;
        clientSecret: string;
    }>;
}
//# sourceMappingURL=applications.d.ts.map