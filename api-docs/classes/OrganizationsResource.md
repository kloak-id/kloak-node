[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / OrganizationsResource

# Class: OrganizationsResource

Defined in: [src/admin/organizations.ts:20](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/organizations.ts#L20)

## Constructors

### Constructor

> **new OrganizationsResource**(`client`, `tenantId`): `OrganizationsResource`

Defined in: [src/admin/organizations.ts:21](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/organizations.ts#L21)

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

Defined in: [src/admin/organizations.ts:40](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/organizations.ts#L40)

#### Parameters

##### data

`CreateOrganizationRequest`

#### Returns

`Promise`\<`Organization`\>

***

### delete()

> **delete**(`orgId`): `Promise`\<`void`\>

Defined in: [src/admin/organizations.ts:64](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/organizations.ts#L64)

#### Parameters

##### orgId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`orgId`): `Promise`\<`Organization`\>

Defined in: [src/admin/organizations.ts:35](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/organizations.ts#L35)

#### Parameters

##### orgId

`string`

#### Returns

`Promise`\<`Organization`\>

***

### list()

> **list**(): `Promise`\<`Organization`[]\>

Defined in: [src/admin/organizations.ts:30](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/organizations.ts#L30)

#### Returns

`Promise`\<`Organization`[]\>

***

### update()

> **update**(`orgId`, `data`): `Promise`\<`Organization`\>

Defined in: [src/admin/organizations.ts:52](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/organizations.ts#L52)

#### Parameters

##### orgId

`string`

##### data

`UpdateOrganizationRequest`

#### Returns

`Promise`\<`Organization`\>
