import type { ApiClient } from './client.js';
import type { AuditLog, Paginated } from '../types/index.js';

type RawAuditLog = Record<string, any>;

function mapAuditLog(r: RawAuditLog): AuditLog {
  return {
    id: r.id,
    tenantId: r.tenant_id || r.tenantId,
    userId: r.user_id || r.userId,
    action: r.action,
    ip: r.ip,
    userAgent: r.user_agent || r.userAgent,
    metadata: r.metadata,
    createdAt: r.created_at || r.createdAt,
  };
}

export class AuditLogsResource {
  constructor(
    private client: ApiClient,
    private tenantId: string,
  ) {}

  private path(suffix = '') {
    return `/api/v1/tenants/${this.tenantId}/audit-logs${suffix}`;
  }

  async list(options?: {
    page?: number;
    pageSize?: number;
    userId?: string;
    action?: string;
  }): Promise<Paginated<AuditLog>> {
    const query = new URLSearchParams();
    if (options?.page) query.set('page', options.page.toString());
    if (options?.pageSize) query.set('page_size', options.pageSize.toString());
    if (options?.userId) query.set('user_id', options.userId);
    if (options?.action) query.set('action', options.action);

    const q = query.toString();
    const uri = q ? `${this.path()}?${q}` : this.path();

    const raw = await this.client.get<{ data: RawAuditLog[]; total: number; page: number; page_size: number }>(uri);
    return {
      data: (raw.data || []).map(mapAuditLog),
      total: raw.total || 0,
      page: raw.page || 1,
      pageSize: raw.page_size || 20,
    };
  }
}
