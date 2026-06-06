import { createHmac, timingSafeEqual } from 'crypto';

/**
 * Verifies the HMAC-SHA256 signature on an incoming Kloak.id webhook request.
 *
 * @param payload  Raw request body (Buffer or string)
 * @param signature  Value of the X-Kloak-Signature header
 * @param secret  Webhook secret configured in Kloak.id
 */
export function verifyWebhookSignature(
  payload: Buffer | string,
  signature: string,
  secret: string,
): boolean {
  const body = typeof payload === 'string' ? Buffer.from(payload) : payload;
  const expected = createHmac('sha256', secret).update(body).digest('hex');
  const actual = Buffer.from(signature.replace(/^sha256=/, ''));
  const expectedBuf = Buffer.from(expected);

  if (actual.length !== expectedBuf.length) return false;
  return timingSafeEqual(actual, expectedBuf);
}
