[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / verifyWebhookSignature

# Function: verifyWebhookSignature()

> **verifyWebhookSignature**(`payload`, `signature`, `secret`): `boolean`

Defined in: [src/webhooks/verify.ts:10](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/webhooks/verify.ts#L10)

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
