"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksResource = void 0;
function mapWebhook(r) {
    return {
        id: r.id,
        tenantId: String(r.tenant_id ?? r.tenantId ?? ''),
        url: r.url,
        events: r.events ?? [],
        enabled: Boolean(r.enabled),
        createdAt: String(r.created_at ?? r.createdAt ?? ''),
    };
}
class WebhooksResource {
    client;
    tenantId;
    constructor(client, tenantId) {
        this.client = client;
        this.tenantId = tenantId;
    }
    path(suffix = '') {
        return `/api/v1/tenants/${this.tenantId}/webhooks${suffix}`;
    }
    create(data) {
        return this.client.post(this.path(), data);
    }
    async list() {
        const raw = await this.client.get(this.path());
        return (raw ?? []).map(mapWebhook);
    }
    async get(webhookId) {
        return mapWebhook(await this.client.get(this.path(`/${webhookId}`)));
    }
    update(webhookId, data) {
        return this.client.put(this.path(`/${webhookId}`), data);
    }
    delete(webhookId) {
        return this.client.delete(this.path(`/${webhookId}`));
    }
}
exports.WebhooksResource = WebhooksResource;
//# sourceMappingURL=webhooks.js.map