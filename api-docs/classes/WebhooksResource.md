[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / WebhooksResource

# Class: WebhooksResource

Defined in: src/admin/webhooks.ts:17

## Constructors

### Constructor

> **new WebhooksResource**(`client`, `tenantId`): `WebhooksResource`

Defined in: src/admin/webhooks.ts:18

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

Defined in: src/admin/webhooks.ts:27

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

Defined in: src/admin/webhooks.ts:52

#### Parameters

##### webhookId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`webhookId`): `Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)\>

Defined in: src/admin/webhooks.ts:41

#### Parameters

##### webhookId

`string`

#### Returns

`Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)\>

***

### list()

> **list**(): `Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)[]\>

Defined in: src/admin/webhooks.ts:36

#### Returns

`Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)[]\>

***

### update()

> **update**(`webhookId`, `data`): `Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)\>

Defined in: src/admin/webhooks.ts:45

#### Parameters

##### webhookId

`string`

##### data

`Partial`\<\{ `enabled`: `boolean`; `events`: `string`[]; `secret`: `string`; `url`: `string`; \}\>

#### Returns

`Promise`\<[`WebhookConfig`](../interfaces/WebhookConfig.md)\>
