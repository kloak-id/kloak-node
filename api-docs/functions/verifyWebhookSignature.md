[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / verifyWebhookSignature

# Function: verifyWebhookSignature()

> **verifyWebhookSignature**(`payload`, `signature`, `secret`): `boolean`

Defined in: [src/webhooks/verify.ts:10](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/webhooks/verify.ts#L10)

Verifies the HMAC-SHA256 signature on an incoming Kloak.id webhook request.

## Parameters

### payload

`string` \| `Buffer`\<`ArrayBufferLike`\>

Raw request body (Buffer or string)

### signature

`string`

Value of the X-Kloak-Signature header

### secret

`string`

Webhook secret configured in Kloak.id

## Returns

`boolean`
