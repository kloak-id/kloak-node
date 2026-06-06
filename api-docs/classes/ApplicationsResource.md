[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / ApplicationsResource

# Class: ApplicationsResource

Defined in: src/admin/applications.ts:28

## Constructors

### Constructor

> **new ApplicationsResource**(`client`, `tenantId`): `ApplicationsResource`

Defined in: src/admin/applications.ts:29

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

Defined in: src/admin/applications.ts:48

#### Parameters

##### data

`CreateClientRequest`

#### Returns

`Promise`\<`Client` & `object`\>

***

### delete()

> **delete**(`clientId`): `Promise`\<`void`\>

Defined in: src/admin/applications.ts:78

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`clientId`): `Promise`\<`Client`\>

Defined in: src/admin/applications.ts:43

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<`Client`\>

***

### list()

> **list**(): `Promise`\<`Client`[]\>

Defined in: src/admin/applications.ts:38

#### Returns

`Promise`\<`Client`[]\>

***

### rotateSecret()

> **rotateSecret**(`clientId`): `Promise`\<\{ `clientId`: `string`; `clientSecret`: `string`; \}\>

Defined in: src/admin/applications.ts:82

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<\{ `clientId`: `string`; `clientSecret`: `string`; \}\>

***

### update()

> **update**(`clientId`, `data`): `Promise`\<`Client`\>

Defined in: src/admin/applications.ts:65

#### Parameters

##### clientId

`string`

##### data

`UpdateClientRequest`

#### Returns

`Promise`\<`Client`\>
