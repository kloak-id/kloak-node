import type { ApiClient } from './client.js';
import type { Organization, CreateOrganizationRequest, UpdateOrganizationRequest } from '../types/index.js';

type RawOrganization = Record<string, any>;

function mapOrganization(r: RawOrganization): Organization {
  return {
    id: r.id,
    tenantId: r.tenant_id || r.tenantId,
    parentId: r.parent_id || r.parentId,
    name: r.name,
    code: r.code,
    description: r.description,
    metadata: r.metadata,
    createdAt: r.created_at || r.createdAt,
    updatedAt: r.updated_at || r.updatedAt,
  };
}

export class OrganizationsResource {
  constructor(
    private client: ApiClient,
    private tenantId: string,
  ) {}

  private path(suffix = '') {
    return `/api/v1/tenants/${this.tenantId}/organizations${suffix}`;
  }

  async list(): Promise<Organization[]> {
    const raw = await this.client.get<RawOrganization[]>(this.path());
    return (raw || []).map(mapOrganization);
  }

  async get(orgId: string): Promise<Organization> {
    const raw = await this.client.get<RawOrganization>(this.path(`/${orgId}`));
    return mapOrganization(raw);
  }

  async create(data: CreateOrganizationRequest): Promise<Organization> {
    const body: Record<string, any> = {
      name: data.name,
      code: data.code,
      parent_id: data.parentId,
      description: data.description,
      metadata: data.metadata,
    };
    const raw = await this.client.post<RawOrganization>(this.path(), body);
    return mapOrganization(raw);
  }

  async update(orgId: string, data: UpdateOrganizationRequest): Promise<Organization> {
    const body: Record<string, any> = {};
    if (data.name !== undefined) body.name = data.name;
    if (data.code !== undefined) body.code = data.code;
    if (data.parentId !== undefined) body.parent_id = data.parentId;
    if (data.description !== undefined) body.description = data.description;
    if (data.metadata !== undefined) body.metadata = data.metadata;

    const raw = await this.client.put<RawOrganization>(this.path(`/${orgId}`), body);
    return mapOrganization(raw);
  }

  async delete(orgId: string): Promise<void> {
    await this.client.delete(this.path(`/${orgId}`));
  }
}
