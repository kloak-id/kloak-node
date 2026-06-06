import type { ApiClient } from './client.js';
import type { AuditLog, Paginated } from '../types/index.js';
export declare class AuditLogsResource {
    private client;
    private tenantId;
    constructor(client: ApiClient, tenantId: string);
    private path;
    list(options?: {
        page?: number;
        pageSize?: number;
        userId?: string;
        action?: string;
    }): Promise<Paginated<AuditLog>>;
}
//# sourceMappingURL=auditLogs.d.ts.map