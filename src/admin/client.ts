import type { KloakConfig, KloakError } from '../types/index.js';

export class KloakApiError extends Error implements KloakError {
  code: string;
  status: number;

  constructor(code: string, message: string, status: number) {
    super(message);
    this.name = 'KloakApiError';
    this.code = code;
    this.status = status;
  }
}

export class ApiClient {
  private baseUrl: string;
  private apiKey: string;
  private timeout: number;

  constructor(config: KloakConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, '');
    this.apiKey = config.apiKey;
    this.timeout = config.timeout ?? 10_000;
  }

  async request<T>(
    method: string,
    path: string,
    body?: unknown,
    params?: Record<string, string | number | boolean>,
  ): Promise<T> {
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

      if (res.status === 204) return undefined as T;

      const data = await res.json();

      if (!res.ok) {
        throw new KloakApiError(
          data.error ?? 'unknown_error',
          data.error_description ?? res.statusText,
          res.status,
        );
      }

      return data as T;
    } finally {
      clearTimeout(timer);
    }
  }

  get<T>(path: string, params?: Record<string, string | number | boolean>) {
    return this.request<T>('GET', path, undefined, params);
  }

  post<T>(path: string, body?: unknown) {
    return this.request<T>('POST', path, body);
  }

  put<T>(path: string, body?: unknown) {
    return this.request<T>('PUT', path, body);
  }

  delete<T>(path: string, body?: unknown, params?: Record<string, string | number | boolean>) {
    return this.request<T>('DELETE', path, body, params);
  }
}
