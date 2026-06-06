import type { ApiClient } from './client.js';
import type { Session } from '../types/index.js';
export declare class SessionsResource {
    private client;
    private tenantId;
    constructor(client: ApiClient, tenantId: string);
    private path;
    list(userId: string): Promise<Session[]>;
    revoke(sessionId: string): Promise<{
        status: string;
    }>;
    revokeAll(userId: string): Promise<{
        status: string;
        revoked: number;
    }>;
}
//# sourceMappingURL=sessions.d.ts.map