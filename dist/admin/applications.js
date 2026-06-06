"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsResource = void 0;
function mapClient(r) {
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
        logoUri: r.logo_uri || r.logoUri,
        clientUri: r.client_uri || r.clientUri,
        policyUri: r.policy_uri || r.policyUri,
        tosUri: r.tos_uri || r.tosUri,
        skipConsent: r.skip_consent ?? r.skipConsent,
        createdAt: r.created_at || r.createdAt,
        updatedAt: r.updated_at || r.updatedAt,
    };
}
class ApplicationsResource {
    client;
    tenantId;
    constructor(client, tenantId) {
        this.client = client;
        this.tenantId = tenantId;
    }
    path(suffix = '') {
        return `/api/v1/tenants/${this.tenantId}/clients${suffix}`;
    }
    async list() {
        const raw = await this.client.get(this.path());
        return (raw || []).map(mapClient);
    }
    async get(clientId) {
        const raw = await this.client.get(this.path(`/${clientId}`));
        return mapClient(raw);
    }
    async create(data) {
        const body = {
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
            logo_uri: data.logoUri,
            client_uri: data.clientUri,
            policy_uri: data.policyUri,
            tos_uri: data.tosUri,
            skip_consent: data.skipConsent,
        };
        const raw = await this.client.post(this.path(), body);
        return mapClient(raw);
    }
    async update(clientId, data) {
        const body = {};
        if (data.name !== undefined)
            body.name = data.name;
        if (data.redirectUris !== undefined)
            body.redirect_uris = data.redirectUris;
        if (data.postLogoutUris !== undefined)
            body.post_logout_uris = data.postLogoutUris;
        if (data.scopes !== undefined)
            body.scopes = data.scopes;
        if (data.allowedOrigins !== undefined)
            body.allowed_origins = data.allowedOrigins;
        if (data.isActive !== undefined)
            body.is_active = data.isActive;
        if (data.authorizationServicesEnabled !== undefined)
            body.authorization_services_enabled = data.authorizationServicesEnabled;
        if (data.pkceMethod !== undefined)
            body.pkce_method = data.pkceMethod;
        if (data.requireDpop !== undefined)
            body.require_dpop = data.requireDpop;
        if (data.jwksUri !== undefined)
            body.jwks_uri = data.jwksUri;
        if (data.loginTheme !== undefined)
            body.login_theme = data.loginTheme;
        if (data.frontchannelLogoutUri !== undefined)
            body.frontchannel_logout_uri = data.frontchannelLogoutUri;
        if (data.frontchannelLogoutSessionRequired !== undefined)
            body.frontchannel_logout_session_required = data.frontchannelLogoutSessionRequired;
        if (data.backchannelLogoutUri !== undefined)
            body.backchannel_logout_uri = data.backchannelLogoutUri;
        if (data.backchannelLogoutSessionRequired !== undefined)
            body.backchannel_logout_session_required = data.backchannelLogoutSessionRequired;
        if (data.logoUri !== undefined)
            body.logo_uri = data.logoUri;
        if (data.clientUri !== undefined)
            body.client_uri = data.clientUri;
        if (data.policyUri !== undefined)
            body.policy_uri = data.policyUri;
        if (data.tosUri !== undefined)
            body.tos_uri = data.tosUri;
        if (data.skipConsent !== undefined)
            body.skip_consent = data.skipConsent;
        const raw = await this.client.put(this.path(`/${clientId}`), body);
        return mapClient(raw);
    }
    async delete(clientId) {
        await this.client.delete(this.path(`/${clientId}`));
    }
    async rotateSecret(clientId) {
        const raw = await this.client.post(this.path(`/${clientId}/rotate-secret`));
        return {
            clientId: raw.client_id,
            clientSecret: raw.client_secret,
        };
    }
}
exports.ApplicationsResource = ApplicationsResource;
//# sourceMappingURL=applications.js.map