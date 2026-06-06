import type { ApiClient } from './client.js';
import type { Session } from '../types/index.js';

type RawSession = Record<string, unknown>;

function mapSession(r: RawSession): Session {
  const s: Session = {
    id: r.id as string,
    tenantId: String(r.tenant_id ?? r.tenantId ?? ''),
    userId: String(r.user_id ?? r.userId ?? ''),
    isActive: Boolean(r.is_active ?? r.isActive),
    expiresAt: String(r.expires_at ?? r.expiresAt ?? ''),
    createdAt: String(r.created_at ?? r.createdAt ?? ''),
  };
  const ip = r.ip as string | undefined;
  if (ip) s.ip = ip;
  const userAgent = (r.user_agent ?? r.userAgent) as string | undefined;
  if (userAgent) s.userAgent = userAgent;
  return s;
}

export class SessionsResource {
  constructor(
    private client: ApiClient,
    private tenantId: string,
  ) {}

  private path(suffix = '') {
    return `/t/${this.tenantId}/sessions${suffix}`;
  }

  async list(userId: string): Promise<Session[]> {
    const raw = await this.client.get<RawSession[]>(this.path(), { user_id: userId });
    return (raw ?? []).map(mapSession);
  }

  revoke(sessionId: string): Promise<{ status: string }> {
    return this.client.delete(this.path(`/${sessionId}`));
  }

  revokeAll(userId: string): Promise<{ status: string; revoked: number }> {
    return this.client.delete(this.path(), undefined, { user_id: userId });
  }
}
