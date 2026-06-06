import type { KloakConfig, KloakError } from '../types/index.js';
export declare class KloakApiError extends Error implements KloakError {
    code: string;
    status: number;
    constructor(code: string, message: string, status: number);
}
export declare class ApiClient {
    private baseUrl;
    private apiKey;
    private timeout;
    constructor(config: KloakConfig);
    request<T>(method: string, path: string, body?: unknown, params?: Record<string, string | number | boolean>): Promise<T>;
    get<T>(path: string, params?: Record<string, string | number | boolean>): Promise<T>;
    post<T>(path: string, body?: unknown): Promise<T>;
    put<T>(path: string, body?: unknown): Promise<T>;
    delete<T>(path: string, body?: unknown, params?: Record<string, string | number | boolean>): Promise<T>;
}
//# sourceMappingURL=client.d.ts.map