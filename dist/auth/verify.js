"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = verifyToken;
const client_js_1 = require("../admin/client.js");
const cache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
async function getPublicKey(jwksUrl, kid) {
    const cached = cache.get(jwksUrl);
    if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
        const key = kid ? cached.keys[kid] : Object.values(cached.keys)[0];
        if (key)
            return key;
    }
    const res = await fetch(jwksUrl);
    if (!res.ok)
        throw new client_js_1.KloakApiError('jwks_fetch_failed', 'Failed to fetch JWKS', res.status);
    const { keys } = (await res.json());
    const keyMap = {};
    for (const jwk of keys) {
        const cryptoKey = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
        if (jwk.kid)
            keyMap[jwk.kid] = cryptoKey;
    }
    cache.set(jwksUrl, { keys: keyMap, fetchedAt: Date.now() });
    const key = kid ? keyMap[kid] : Object.values(keyMap)[0];
    if (!key)
        throw new client_js_1.KloakApiError('key_not_found', `No matching key found in JWKS`, 401);
    return key;
}
function decodeJwt(token) {
    const [headerB64, payloadB64] = token.split('.');
    if (!headerB64 || !payloadB64) {
        throw new client_js_1.KloakApiError('invalid_token', 'Malformed JWT', 401);
    }
    const header = JSON.parse(Buffer.from(headerB64, 'base64url').toString());
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString());
    return { header, payload };
}
async function verifyToken(token, jwksUrl) {
    const { header, payload } = decodeJwt(token);
    const publicKey = await getPublicKey(jwksUrl, header['kid']);
    const [headerB64, payloadB64, sigB64] = token.split('.');
    if (!sigB64)
        throw new client_js_1.KloakApiError('invalid_token', 'Malformed JWT signature', 401);
    const data = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
    const sig = Buffer.from(sigB64, 'base64url');
    const valid = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', publicKey, sig, data);
    if (!valid)
        throw new client_js_1.KloakApiError('invalid_token', 'JWT signature verification failed', 401);
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) {
        throw new client_js_1.KloakApiError('token_expired', 'JWT has expired', 401);
    }
    return payload;
}
//# sourceMappingURL=verify.js.map