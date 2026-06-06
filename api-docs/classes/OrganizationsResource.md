[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / OrganizationsResource

# Class: OrganizationsResource

Defined in: src/admin/organizations.ts:20

## Constructors

### Constructor

> **new OrganizationsResource**(`client`, `tenantId`): `OrganizationsResource`

Defined in: src/admin/organizations.ts:21

#### Parameters

##### client

`ApiClient`

##### tenantId

`string`

#### Returns

`OrganizationsResource`

## Methods

### create()

> **create**(`data`): `Promise`\<`Organization`\>

Defined in: src/admin/organizations.ts:40

#### Parameters

##### data

`CreateOrganizationRequest`

#### Returns

`Promise`\<`Organization`\>

***

### delete()

> **delete**(`orgId`): `Promise`\<`void`\>

Defined in: src/admin/organizations.ts:64

#### Parameters

##### orgId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`orgId`): `Promise`\<`Organization`\>

Defined in: src/admin/organizations.ts:35

#### Parameters

##### orgId

`string`

#### Returns

`Promise`\<`Organization`\>

***

### list()

> **list**(): `Promise`\<`Organization`[]\>

Defined in: src/admin/organizations.ts:30

#### Returns

`Promise`\<`Organization`[]\>

***

### update()

> **update**(`orgId`, `data`): `Promise`\<`Organization`\>

Defined in: src/admin/organizations.ts:52

#### Parameters

##### orgId

`string`

##### data

`UpdateOrganizationRequest`

#### Returns

`Promise`\<`Organization`\>
