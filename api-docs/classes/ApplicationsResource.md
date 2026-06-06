[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / ApplicationsResource

# Class: ApplicationsResource

Defined in: [src/admin/applications.ts:37](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/applications.ts#L37)

## Constructors

### Constructor

> **new ApplicationsResource**(`client`, `tenantId`): `ApplicationsResource`

Defined in: [src/admin/applications.ts:38](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/applications.ts#L38)

#### Parameters

##### client

`ApiClient`

##### tenantId

`string`

#### Returns

`ApplicationsResource`

## Methods

### create()

> **create**(`data`): `Promise`\<`Client` & `object`\>

Defined in: [src/admin/applications.ts:57](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/applications.ts#L57)

#### Parameters

##### data

`CreateClientRequest`

#### Returns

`Promise`\<`Client` & `object`\>

***

### delete()

> **delete**(`clientId`): `Promise`\<`void`\>

Defined in: [src/admin/applications.ts:105](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/applications.ts#L105)

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`clientId`): `Promise`\<`Client`\>

Defined in: [src/admin/applications.ts:52](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/applications.ts#L52)

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<`Client`\>

***

### list()

> **list**(): `Promise`\<`Client`[]\>

Defined in: [src/admin/applications.ts:47](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/applications.ts#L47)

#### Returns

`Promise`\<`Client`[]\>

***

### rotateSecret()

> **rotateSecret**(`clientId`): `Promise`\<\{ `clientId`: `string`; `clientSecret`: `string`; \}\>

Defined in: [src/admin/applications.ts:109](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/applications.ts#L109)

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<\{ `clientId`: `string`; `clientSecret`: `string`; \}\>

***

### update()

> **update**(`clientId`, `data`): `Promise`\<`Client`\>

Defined in: [src/admin/applications.ts:83](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/applications.ts#L83)

#### Parameters

##### clientId

`string`

##### data

`UpdateClientRequest`

#### Returns

`Promise`\<`Client`\>
