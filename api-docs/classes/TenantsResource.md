[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / TenantsResource

# Class: TenantsResource

Defined in: [src/admin/tenants.ts:43](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/tenants.ts#L43)

## Constructors

### Constructor

> **new TenantsResource**(`client`): `TenantsResource`

Defined in: [src/admin/tenants.ts:44](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/tenants.ts#L44)

#### Parameters

##### client

`ApiClient`

#### Returns

`TenantsResource`

## Methods

### delete()

> **delete**(`tenantId`): `Promise`\<`void`\>

Defined in: [src/admin/tenants.ts:78](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/tenants.ts#L78)

#### Parameters

##### tenantId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`tenantId`): `Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

Defined in: [src/admin/tenants.ts:58](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/tenants.ts#L58)

#### Parameters

##### tenantId

`string`

#### Returns

`Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

***

### getByDomain()

> **getByDomain**(`domain`): `Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

Defined in: [src/admin/tenants.ts:66](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/tenants.ts#L66)

#### Parameters

##### domain

`string`

#### Returns

`Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

***

### getBySlug()

> **getBySlug**(`slug`): `Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

Defined in: [src/admin/tenants.ts:62](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/tenants.ts#L62)

#### Parameters

##### slug

`string`

#### Returns

`Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

***

### list()

> **list**(`opts?`): `Promise`\<[`Paginated`](../interfaces/Paginated.md)\<[`Tenant`](../interfaces/Tenant.md)\>\>

Defined in: [src/admin/tenants.ts:46](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/tenants.ts#L46)

#### Parameters

##### opts?

`ListTenantsOptions` = `{}`

#### Returns

`Promise`\<[`Paginated`](../interfaces/Paginated.md)\<[`Tenant`](../interfaces/Tenant.md)\>\>

***

### setStatus()

> **setStatus**(`tenantId`, `status`): `Promise`\<\{ `status`: `string`; \}\>

Defined in: [src/admin/tenants.ts:74](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/tenants.ts#L74)

#### Parameters

##### tenantId

`string`

##### status

`"active"` \| `"pending"` \| `"suspended"` \| `"deleted"`

#### Returns

`Promise`\<\{ `status`: `string`; \}\>

***

### stats()

> **stats**(): `Promise`\<\{ `byPlan`: `Record`\<`string`, `number`\>; `total`: `number`; \}\>

Defined in: [src/admin/tenants.ts:82](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/tenants.ts#L82)

#### Returns

`Promise`\<\{ `byPlan`: `Record`\<`string`, `number`\>; `total`: `number`; \}\>

***

### update()

> **update**(`tenantId`, `data`): `Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

Defined in: [src/admin/tenants.ts:70](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/tenants.ts#L70)

#### Parameters

##### tenantId

`string`

##### data

`UpdateTenantOptions`

#### Returns

`Promise`\<[`Tenant`](../interfaces/Tenant.md)\>
