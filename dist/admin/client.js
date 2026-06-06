"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = exports.KloakApiError = void 0;
class KloakApiError extends Error {
    code;
    status;
    constructor(code, message, status) {
        super(message);
        this.name = 'KloakApiError';
        this.code = code;
        this.status = status;
    }
}
exports.KloakApiError = KloakApiError;
class ApiClient {
    baseUrl;
    apiKey;
    timeout;
    constructor(config) {
        this.baseUrl = config.baseUrl.replace(/\/$/, '');
        this.apiKey = config.apiKey;
        this.timeout = config.timeout ?? 10_000;
    }
    async request(method, path, body, params) {
        const url = new URL(`${this.baseUrl}${path}`);
        if (params) {
            for (const [k, v] of Object.entries(params)) {
                url.searchParams.set(k, String(v));
            }
        }
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), this.timeout);
        try {
            const res = await fetch(url.toString(), {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.apiKey}`,
                },
                ...(body !== undefined && { body: JSON.stringify(body) }),
                cache: 'no-store',
                signal: controller.signal,
            });
            if (res.status === 204)
                return undefined;
            const data = await res.json();
            if (!res.ok) {
                throw new KloakApiError(data.error ?? 'unknown_error', data.error_description ?? res.statusText, res.status);
            }
            return data;
        }
        finally {
            clearTimeout(timer);
        }
    }
    get(path, params) {
        return this.request('GET', path, undefined, params);
    }
    post(path, body) {
        return this.request('POST', path, body);
    }
    put(path, body) {
        return this.request('PUT', path, body);
    }
    delete(path, body, params) {
        return this.request('DELETE', path, body, params);
    }
}
exports.ApiClient = ApiClient;
//# sourceMappingURL=client.js.map