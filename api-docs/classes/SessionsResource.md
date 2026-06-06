[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / SessionsResource

# Class: SessionsResource

Defined in: [src/admin/sessions.ts:22](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/sessions.ts#L22)

## Constructors

### Constructor

> **new SessionsResource**(`client`, `tenantId`): `SessionsResource`

Defined in: [src/admin/sessions.ts:23](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/sessions.ts#L23)

#### Parameters

##### client

`ApiClient`

##### tenantId

`string`

#### Returns

`SessionsResource`

## Methods

### list()

> **list**(`userId`): `Promise`\<[`Session`](../interfaces/Session.md)[]\>

Defined in: [src/admin/sessions.ts:32](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/sessions.ts#L32)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`Session`](../interfaces/Session.md)[]\>

***

### revoke()

> **revoke**(`sessionId`): `Promise`\<\{ `status`: `string`; \}\>

Defined in: [src/admin/sessions.ts:37](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/sessions.ts#L37)

#### Parameters

##### sessionId

`string`

#### Returns

`Promise`\<\{ `status`: `string`; \}\>

***

### revokeAll()

> **revokeAll**(`userId`): `Promise`\<\{ `revoked`: `number`; `status`: `string`; \}\>

Defined in: [src/admin/sessions.ts:41](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/sessions.ts#L41)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<\{ `revoked`: `number`; `status`: `string`; \}\>
