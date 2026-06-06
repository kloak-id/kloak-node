/**
 * Verifies the HMAC-SHA256 signature on an incoming Kloak.id webhook request.
 *
 * @param payload  Raw request body (Buffer or string)
 * @param signature  Value of the X-Kloak-Signature header
 * @param secret  Webhook secret configured in Kloak.id
 */
export declare function verifyWebhookSignature(payload: Buffer | string, signature: string, secret: string): boolean;
//# sourceMappingURL=verify.d.ts.map