import type { ApiClient } from './client.js';
import type { User, Paginated } from '../types/index.js';

export interface ListUsersOptions {
  page?: number;
  pageSize?: number;
  search?: string;
}

export interface UpdateUserOptions {
  firstName?: string;
  lastName?: string;
  username?: string;
  role?: User['role'];
  isActive?: boolean;
}

type RawUser = Record<string, unknown>;

function mapUser(r: RawUser): User {
  const u: User = {
    id: r.id as string,
    tenantId: String(r.tenant_id ?? r.tenantId ?? ''),
    email: r.email as string,
    role: r.role as User['role'],
    isActive: Boolean(r.is_active ?? r.isActive),
    isEmailVerified: Boolean(r.is_email_verified ?? r.isEmailVerified),
    failedLoginAttempts: Number(r.failed_login_attempts ?? r.failedLoginAttempts ?? 0),
    createdAt: String(r.created_at ?? r.createdAt ?? ''),
    updatedAt: String(r.updated_at ?? r.updatedAt ?? ''),
  };
  const firstName = (r.first_name ?? r.firstName) as string | undefined;
  if (firstName) u.firstName = firstName;
  const lastName = (r.last_name ?? r.lastName) as string | undefined;
  if (lastName) u.lastName = lastName;
  const username = r.username as string | undefined;
  if (username) u.username = username;
  const displayName = (r.display_name ?? r.displayName) as string | undefined;
  if (displayName) u.displayName = displayName;
  const mfaMethod = (r.mfa_method ?? r.mfaMethod) as string | undefined;
  if (mfaMethod === 'totp') u.mfaMethod = 'totp';
  const lockedUntil = (r.locked_until ?? r.lockedUntil) as string | undefined;
  if (lockedUntil) u.lockedUntil = lockedUntil;
  const lastLoginAt = (r.last_login_at ?? r.lastLoginAt) as string | undefined;
  if (lastLoginAt) u.lastLoginAt = lastLoginAt;
  const avatarUrl = (r.avatar_url ?? r.avatarUrl) as string | undefined;
  if (avatarUrl) u.avatarUrl = avatarUrl;
  return u;
}

export class UsersResource {
  constructor(
    private client: ApiClient,
    private tenantId: string,
  ) {}

  private path(suffix = '') {
    return `/api/v1/tenants/${this.tenantId}/users${suffix}`;
  }

  async list(opts: ListUsersOptions = {}): Promise<Paginated<User>> {
    const params: Record<string, string | number | boolean> = { page: opts.page ?? 1, page_size: opts.pageSize ?? 20 };
    if (opts.search) params.search = opts.search;
    const raw = await this.client.get<{ page: number; page_size: number; total: number; users: RawUser[] }>(
      this.path(),
      params,
    );
    const users = (raw.users ?? []).map(mapUser);
    return { data: users, total: raw.total ?? users.length, page: raw.page, pageSize: raw.page_size };
  }

  async get(userId: string): Promise<User> {
    return mapUser(await this.client.get<RawUser>(this.path(`/${userId}`)));
  }

  update(userId: string, data: UpdateUserOptions): Promise<User> {
    const body: Record<string, unknown> = {};
    if (data.firstName !== undefined) body.first_name = data.firstName;
    if (data.lastName  !== undefined) body.last_name  = data.lastName;
    if (data.username  !== undefined) body.username   = data.username;
    if (data.role      !== undefined) body.role       = data.role;
    if (data.isActive  !== undefined) body.is_active  = data.isActive;
    return this.client.put(this.path(`/${userId}`), body);
  }

  delete(userId: string): Promise<void> {
    return this.client.delete(this.path(`/${userId}`));
  }
}
