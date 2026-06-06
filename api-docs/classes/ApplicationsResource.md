[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / ApplicationsResource

# Class: ApplicationsResource

Defined in: [src/admin/applications.ts:42](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/applications.ts#L42)

## Constructors

### Constructor

> **new ApplicationsResource**(`client`, `tenantId`): `ApplicationsResource`

Defined in: [src/admin/applications.ts:43](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/applications.ts#L43)

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

Defined in: [src/admin/applications.ts:62](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/applications.ts#L62)

#### Parameters

##### data

`CreateClientRequest`

#### Returns

`Promise`\<`Client` & `object`\>

***

### delete()

> **delete**(`clientId`): `Promise`\<`void`\>

Defined in: [src/admin/applications.ts:120](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/applications.ts#L120)

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`clientId`): `Promise`\<`Client`\>

Defined in: [src/admin/applications.ts:57](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/applications.ts#L57)

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<`Client`\>

***

### list()

> **list**(): `Promise`\<`Client`[]\>

Defined in: [src/admin/applications.ts:52](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/applications.ts#L52)

#### Returns

`Promise`\<`Client`[]\>

***

### rotateSecret()

> **rotateSecret**(`clientId`): `Promise`\<\{ `clientId`: `string`; `clientSecret`: `string`; \}\>

Defined in: [src/admin/applications.ts:124](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/applications.ts#L124)

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<\{ `clientId`: `string`; `clientSecret`: `string`; \}\>

***

### update()

> **update**(`clientId`, `data`): `Promise`\<`Client`\>

Defined in: [src/admin/applications.ts:93](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/applications.ts#L93)

#### Parameters

##### clientId

`string`

##### data

`UpdateClientRequest`

#### Returns

`Promise`\<`Client`\>
