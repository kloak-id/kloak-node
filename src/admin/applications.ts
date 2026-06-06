import type { ApiClient } from './client.js';
import type { Client, CreateClientRequest, UpdateClientRequest } from '../types/index.js';

type RawClient = Record<string, any>;

function mapClient(r: RawClient): Client {
  return {
    id: r.id,
    tenantId: r.tenant_id || r.tenantId,
    name: r.name,
    clientId: r.client_id || r.clientId,
    clientSecret: r.client_secret || r.clientSecret,
    clientType: r.client_type || r.clientType,
    grantTypes: r.grant_types || r.grantTypes || [],
    responseTypes: r.response_types || r.responseTypes || [],
    redirectUris: r.redirect_uris || r.redirectUris || [],
    postLogoutUris: r.post_logout_uris || r.postLogoutUris || [],
    scopes: r.scopes || [],
    allowedOrigins: r.allowed_origins || r.allowedOrigins || [],
    accessTokenType: r.access_token_type || r.accessTokenType,
    tokenEndpointAuthMethod: r.token_endpoint_auth_method || r.tokenEndpointAuthMethod,
    isActive: r.is_active !== undefined ? r.is_active : r.isActive,
    authorizationServicesEnabled: r.authorization_services_enabled ?? r.authorizationServicesEnabled,
    pkceMethod: r.pkce_method || r.pkceMethod,
    requireDpop: r.require_dpop ?? r.requireDpop,
    jwksUri: r.jwks_uri || r.jwksUri,
    loginTheme: r.login_theme || r.loginTheme,
    frontchannelLogoutUri: r.frontchannel_logout_uri || r.frontchannelLogoutUri,
    frontchannelLogoutSessionRequired: r.frontchannel_logout_session_required ?? r.frontchannelLogoutSessionRequired,
    backchannelLogoutUri: r.backchannel_logout_uri || r.backchannelLogoutUri,
    backchannelLogoutSessionRequired: r.backchannel_logout_session_required ?? r.backchannelLogoutSessionRequired,
    createdAt: r.created_at || r.createdAt,
    updatedAt: r.updated_at || r.updatedAt,
  };
}

export class ApplicationsResource {
  constructor(
    private client: ApiClient,
    private tenantId: string,
  ) {}

  private path(suffix = '') {
    return `/api/v1/tenants/${this.tenantId}/clients${suffix}`;
  }

  async list(): Promise<Client[]> {
    const raw = await this.client.get<RawClient[]>(this.path());
    return (raw || []).map(mapClient);
  }

  async get(clientId: string): Promise<Client> {
    const raw = await this.client.get<RawClient>(this.path(`/${clientId}`));
    return mapClient(raw);
  }

  async create(data: CreateClientRequest): Promise<Client & { clientSecret: string }> {
    const body: Record<string, any> = {
      name: data.name,
      client_type: data.clientType,
      grant_types: data.grantTypes,
      response_types: data.responseTypes,
      redirect_uris: data.redirectUris,
      post_logout_uris: data.postLogoutUris,
      scopes: data.scopes,
      allowed_origins: data.allowedOrigins,
      access_token_type: data.accessTokenType,
      token_endpoint_auth_method: data.tokenEndpointAuthMethod,
      authorization_services_enabled: data.authorizationServicesEnabled,
      pkce_method: data.pkceMethod,
      require_dpop: data.requireDpop,
      jwks_uri: data.jwksUri,
      login_theme: data.loginTheme,
      frontchannel_logout_uri: data.frontchannelLogoutUri,
      frontchannel_logout_session_required: data.frontchannelLogoutSessionRequired,
      backchannel_logout_uri: data.backchannelLogoutUri,
      backchannel_logout_session_required: data.backchannelLogoutSessionRequired,
    };
    const raw = await this.client.post<RawClient>(this.path(), body);
    return mapClient(raw) as Client & { clientSecret: string };
  }

  async update(clientId: string, data: UpdateClientRequest): Promise<Client> {
    const body: Record<string, any> = {};
    if (data.name !== undefined) body.name = data.name;
    if (data.redirectUris !== undefined) body.redirect_uris = data.redirectUris;
    if (data.postLogoutUris !== undefined) body.post_logout_uris = data.postLogoutUris;
    if (data.scopes !== undefined) body.scopes = data.scopes;
    if (data.allowedOrigins !== undefined) body.allowed_origins = data.allowedOrigins;
    if (data.isActive !== undefined) body.is_active = data.isActive;
    if (data.authorizationServicesEnabled !== undefined) body.authorization_services_enabled = data.authorizationServicesEnabled;
    if (data.pkceMethod !== undefined) body.pkce_method = data.pkceMethod;
    if (data.requireDpop !== undefined) body.require_dpop = data.requireDpop;
    if (data.jwksUri !== undefined) body.jwks_uri = data.jwksUri;
    if (data.loginTheme !== undefined) body.login_theme = data.loginTheme;
    if (data.frontchannelLogoutUri !== undefined) body.frontchannel_logout_uri = data.frontchannelLogoutUri;
    if (data.frontchannelLogoutSessionRequired !== undefined) body.frontchannel_logout_session_required = data.frontchannelLogoutSessionRequired;
    if (data.backchannelLogoutUri !== undefined) body.backchannel_logout_uri = data.backchannelLogoutUri;
    if (data.backchannelLogoutSessionRequired !== undefined) body.backchannel_logout_session_required = data.backchannelLogoutSessionRequired;
    
    const raw = await this.client.put<RawClient>(this.path(`/${clientId}`), body);
    return mapClient(raw);
  }

  async delete(clientId: string): Promise<void> {
    await this.client.delete(this.path(`/${clientId}`));
  }

  async rotateSecret(clientId: string): Promise<{ clientId: string; clientSecret: string }> {
    const raw = await this.client.post<{ client_id: string; client_secret: string }>(
      this.path(`/${clientId}/rotate-secret`)
    );
    return {
      clientId: raw.client_id,
      clientSecret: raw.client_secret,
    };
  }
}
