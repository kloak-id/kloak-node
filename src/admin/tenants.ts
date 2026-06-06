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

type RawTenant = Record<string, unknown>;

function mapTenant(r: RawTenant): Tenant {
  const t: Tenant = {
    id: r.id as string,
    name: r.name as string,
    slug: r.slug as string,
    status: r.status as Tenant['status'],
    plan: r.plan as Tenant['plan'],
    dnsVerified: Boolean(r.dns_verified ?? r.dnsVerified),
    maxUsers: Number(r.max_users ?? r.maxUsers),
    createdAt: String(r.created_at ?? r.createdAt ?? ''),
    updatedAt: String(r.updated_at ?? r.updatedAt ?? ''),
  };
  const subdomain = r.subdomain as string | undefined;
  if (subdomain) t.subdomain = subdomain;
  const customDomain = (r.custom_domain ?? r.customDomain) as string | undefined;
  if (customDomain) t.customDomain = customDomain;
  const ownerId = (r.owner_id ?? r.ownerId) as string | undefined;
  if (ownerId) t.ownerId = ownerId;
  return t;
}

export class TenantsResource {
  constructor(private client: ApiClient) {}

  async list(opts: ListTenantsOptions = {}): Promise<Paginated<Tenant>> {
    const raw = await this.client.get<{ page: number; page_size: number; tenants: RawTenant[] }>('/api/v1/tenants', {
      page: opts.page ?? 1,
      page_size: opts.pageSize ?? 20,
      ...(opts.status && { status: opts.status }),
      ...(opts.plan && { plan: opts.plan }),
      ...(opts.search && { search: opts.search }),
    });
    const tenants = (raw.tenants ?? []).map(mapTenant);
    return { data: tenants, total: tenants.length, page: raw.page, pageSize: raw.page_size };
  }

  async get(tenantId: string): Promise<Tenant> {
    return mapTenant(await this.client.get<RawTenant>(`/api/v1/tenants/${tenantId}`));
  }

  async getBySlug(slug: string): Promise<Tenant> {
    return mapTenant(await this.client.get<RawTenant>(`/api/v1/tenants/lookup/by-slug/${slug}`));
  }

  async getByDomain(domain: string): Promise<Tenant> {
    return mapTenant(await this.client.get<RawTenant>(`/api/v1/tenants/lookup/by-domain/${domain}`));
  }

  update(tenantId: string, data: UpdateTenantOptions): Promise<Tenant> {
    return this.client.put(`/api/v1/tenants/${tenantId}`, data);
  }

  setStatus(tenantId: string, status: Tenant['status']): Promise<{ status: string }> {
    return this.client.put(`/api/v1/tenants/${tenantId}/status`, { status });
  }

  delete(tenantId: string): Promise<void> {
    return this.client.delete(`/api/v1/tenants/${tenantId}`);
  }

  stats(): Promise<{ total: number; byPlan: Record<string, number> }> {
    return this.client.get('/api/v1/tenants/stats');
  }
}
