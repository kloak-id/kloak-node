 // types
export interface KloakConfig {
  baseUrl: string;
  apiKey: string;
  timeout?: number;
}

export interface User {
  id: string;
  tenantId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  displayName?: string;
  role: 'admin' | 'operator' | 'user' | 'viewer';
  isActive: boolean;
  isEmailVerified: boolean;
  mfaMethod?: 'totp';
  failedLoginAttempts: number;
  lockedUntil?: string;
  lastLoginAt?: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  status: 'active' | 'pending' | 'suspended' | 'deleted';
  plan: 'free' | 'pro' | 'enterprise';
  subdomain?: string;
  customDomain?: string;
  dnsVerified: boolean;
  maxUsers: number;
  ownerId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Session {
  id: string;
  tenantId: string;
  userId: string;
  ip?: string;
  userAgent?: string;
  isActive: boolean;
  expiresAt: string;
  createdAt: string;
}

export interface Role {
  id: string;
  tenantId: string;
  name: string;
  description?: string;
  createdAt: string;
}

export interface Permission {
  id: string;
  tenantId: string;
  name: string;
  resource: string;
  action: string;
  description?: string;
  type?: string;
  createdAt: string;
}

export interface PasswordPolicy {
  minLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumbers: boolean;
  requireSpecial: boolean;
  expiryDays: number;
  duplicateCheck: boolean;
}

export interface TenantConfig {
  sessionTimeoutMinutes: number;
  tokenLifetimeMinutes: number;
  refreshTokenLifetimeDays: number;
  maxLoginAttempts: number;
  passwordPolicy: PasswordPolicy;
}

export interface WebhookConfig {
  id: string;
  tenantId: string;
  url: string;
  events: string[];
  enabled: boolean;
  createdAt: string;
}


export interface Client {
  id: string;
  tenantId: string;
  name: string;
  clientId: string;
  clientSecret?: string;
  clientType: 'public' | 'confidential';
  grantTypes: string[];
  responseTypes: string[];
  redirectUris: string[];
  postLogoutUris?: string[];
  scopes?: string[];
  allowedOrigins: string[];
  accessTokenType: 'JWT' | 'opaque';
  tokenEndpointAuthMethod: string;
  isActive: boolean;
  authorizationServicesEnabled?: boolean;
  pkceMethod?: string;
  requireDpop?: boolean;
  jwksUri?: string;
  loginTheme?: string;
  frontchannelLogoutUri?: string;
  frontchannelLogoutSessionRequired?: boolean;
  backchannelLogoutUri?: string;
  backchannelLogoutSessionRequired?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateClientRequest {
  name: string;
  clientType: 'public' | 'confidential';
  grantTypes: string[];
  responseTypes: string[];
  redirectUris: string[];
  postLogoutUris?: string[];
  scopes?: string[];
  allowedOrigins?: string[];
  accessTokenType?: 'JWT' | 'opaque';
  tokenEndpointAuthMethod?: string;
  authorizationServicesEnabled?: boolean;
  pkceMethod?: string;
  requireDpop?: boolean;
  jwksUri?: string;
  loginTheme?: string;
  frontchannelLogoutUri?: string;
  frontchannelLogoutSessionRequired?: boolean;
  backchannelLogoutUri?: string;
  backchannelLogoutSessionRequired?: boolean;
}

export interface UpdateClientRequest {
  name?: string;
  redirectUris?: string[];
  postLogoutUris?: string[];
  scopes?: string[];
  allowedOrigins?: string[];
  isActive?: boolean;
  authorizationServicesEnabled?: boolean;
  pkceMethod?: string;
  requireDpop?: boolean;
  jwksUri?: string;
  loginTheme?: string;
  frontchannelLogoutUri?: string;
  frontchannelLogoutSessionRequired?: boolean;
  backchannelLogoutUri?: string;
  backchannelLogoutSessionRequired?: boolean;
}
export interface AuditLog {
  id: string;
  tenantId: string;
  userId?: string;
  action: string;
  ip?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface TokenClaims {
  sub: string;
  tenantId: string;
  email?: string;
  role?: string;
  sessionId?: string;
  iss: string;
  aud?: string | string[];
  exp: number;
  iat: number;
}

export interface Organization {
  id: string;
  tenantId: string;
  parentId?: string;
  name: string;
  code: string;
  description?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrganizationRequest {
  name: string;
  code: string;
  parentId?: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

export interface UpdateOrganizationRequest {
  name?: string;
  code?: string;
  parentId?: string | null;
  description?: string | null;
  metadata?: Record<string, unknown> | null;
}

export interface KloakError extends Error {
  code: string;
  status: number;
}
