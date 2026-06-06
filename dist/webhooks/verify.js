"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyWebhookSignature = verifyWebhookSignature;
const crypto_1 = require("crypto");
/**
 * Verifies the HMAC-SHA256 signature on an incoming Kloak.id webhook request.
 *
 * @param payload  Raw request body (Buffer or string)
 * @param signature  Value of the X-Kloak-Signature header
 * @param secret  Webhook secret configured in Kloak.id
 */
function verifyWebhookSignature(payload, signature, secret) {
    const body = typeof payload === 'string' ? Buffer.from(payload) : payload;
    const expected = (0, crypto_1.createHmac)('sha256', secret).update(body).digest('hex');
    const actual = Buffer.from(signature.replace(/^sha256=/, ''));
    const expectedBuf = Buffer.from(expected);
    if (actual.length !== expectedBuf.length)
        return false;
    return (0, crypto_1.timingSafeEqual)(actual, expectedBuf);
}
//# sourceMappingURL=verify.js.map