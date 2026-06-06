import type { ApiClient } from './client.js';
import type { WebhookConfig } from '../types/index.js';
export declare class WebhooksResource {
    private client;
    private tenantId;
    constructor(client: ApiClient, tenantId: string);
    private path;
    create(data: {
        url: string;
        events: string[];
        secret?: string;
        enabled?: boolean;
    }): Promise<WebhookConfig>;
    list(): Promise<WebhookConfig[]>;
    get(webhookId: string): Promise<WebhookConfig>;
    update(webhookId: string, data: Partial<{
        url: string;
        events: string[];
        secret: string;
        enabled: boolean;
    }>): Promise<WebhookConfig>;
    delete(webhookId: string): Promise<void>;
}
//# sourceMappingURL=webhooks.d.ts.map