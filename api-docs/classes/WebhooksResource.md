[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / WebhooksResource

# Class: WebhooksResource

Defined in: [src/admin/webhooks.ts:17](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/webhooks.ts#L17)

## Constructors

### Constructor

> **new WebhooksResource**(`client`, `tenantId`): `WebhooksResource`

Defined in: [src/admin/webhooks.ts:18](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/webhooks.ts#L18)

#### Parameters

##### client

`ApiClient`

##### tenantId

`string`

#### Returns

`WebhooksResource`

## Methods

### create()

> **create**(`data`): `Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)\>

Defined in: [src/admin/webhooks.ts:27](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/webhooks.ts#L27)

#### Parameters

##### data

###### enabled?

`boolean`

###### events

`string`[]

###### secret?

`string`

###### url

`string`

#### Returns

`Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)\>

***

### delete()

> **delete**(`webhookId`): `Promise`\<`void`\>

Defined in: [src/admin/webhooks.ts:52](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/webhooks.ts#L52)

#### Parameters

##### webhookId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`webhookId`): `Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)\>

Defined in: [src/admin/webhooks.ts:41](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/webhooks.ts#L41)

#### Parameters

##### webhookId

`string`

#### Returns

`Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)\>

***

### list()

> **list**(): `Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)[]\>

Defined in: [src/admin/webhooks.ts:36](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/webhooks.ts#L36)

#### Returns

`Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)[]\>

***

### update()

> **update**(`webhookId`, `data`): `Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)\>

Defined in: [src/admin/webhooks.ts:45](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/webhooks.ts#L45)

#### Parameters

##### webhookId

`string`

##### data

`Partial`\<\{ `enabled`: `boolean`; `events`: `string`[]; `secret`: `string`; `url`: `string`; \}\>

#### Returns

`Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)\>
