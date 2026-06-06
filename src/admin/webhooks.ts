import type { ApiClient } from './client.js';
import type { WebhookConfig } from '../types/index.js';

type RawWebhook = Record<string, unknown>;

function mapWebhook(r: RawWebhook): WebhookConfig {
  return {
    id: r.id as string,
    tenantId: String(r.tenant_id ?? r.tenantId ?? ''),
    url: r.url as string,
    events: (r.events as string[]) ?? [],
    enabled: Boolean(r.enabled),
    createdAt: String(r.created_at ?? r.createdAt ?? ''),
  };
}

export class WebhooksResource {
  constructor(
    private client: ApiClient,
    private tenantId: string,
  ) {}

  private path(suffix = '') {
    return `/api/v1/tenants/${this.tenantId}/webhooks${suffix}`;
  }

  create(data: {
    url: string;
    events: string[];
    secret?: string;
    enabled?: boolean;
  }): Promise<WebhookConfig> {
    return this.client.post(this.path(), data);
  }

  async list(): Promise<WebhookConfig[]> {
    const raw = await this.client.get<RawWebhook[]>(this.path());
    return (raw ?? []).map(mapWebhook);
  }

  async get(webhookId: string): Promise<WebhookConfig> {
    return mapWebhook(await this.client.get<RawWebhook>(this.path(`/${webhookId}`)));
  }

  update(
    webhookId: string,
    data: Partial<{ url: string; events: string[]; secret: string; enabled: boolean }>,
  ): Promise<WebhookConfig> {
    return this.client.put(this.path(`/${webhookId}`), data);
  }

  delete(webhookId: string): Promise<void> {
    return this.client.delete(this.path(`/${webhookId}`));
  }
}
