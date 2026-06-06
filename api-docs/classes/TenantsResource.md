[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / TenantsResource

# Class: TenantsResource

Defined in: src/admin/tenants.ts:43

## Constructors

### Constructor

> **new TenantsResource**(`client`): `TenantsResource`

Defined in: src/admin/tenants.ts:44

#### Parameters

##### client

`ApiClient`

#### Returns

`TenantsResource`

## Methods

### delete()

> **delete**(`tenantId`): `Promise`\<`void`\>

Defined in: src/admin/tenants.ts:78

#### Parameters

##### tenantId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`tenantId`): `Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

Defined in: src/admin/tenants.ts:58

#### Parameters

##### tenantId

`string`

#### Returns

`Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

***

### getByDomain()

> **getByDomain**(`domain`): `Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

Defined in: src/admin/tenants.ts:66

#### Parameters

##### domain

`string`

#### Returns

`Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

***

### getBySlug()

> **getBySlug**(`slug`): `Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

Defined in: src/admin/tenants.ts:62

#### Parameters

##### slug

`string`

#### Returns

`Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

***

### list()

> **list**(`opts?`): `Promise`\<[`Paginated`](../interfaces/Paginated.md)\<[`Tenant`](../interfaces/Tenant.md)\>\>

Defined in: src/admin/tenants.ts:46

#### Parameters

##### opts?

`ListTenantsOptions` = `{}`

#### Returns

`Promise`\<[`Paginated`](../interfaces/Paginated.md)\<[`Tenant`](../interfaces/Tenant.md)\>\>

***

### setStatus()

> **setStatus**(`tenantId`, `status`): `Promise`\<\{ `status`: `string`; \}\>

Defined in: src/admin/tenants.ts:74

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

Defined in: src/admin/tenants.ts:82

#### Returns

`Promise`\<\{ `byPlan`: `Record`\<`string`, `number`\>; `total`: `number`; \}\>

***

### update()

> **update**(`tenantId`, `data`): `Promise`\<[`Tenant`](../interfaces/Tenant.md)\>

Defined in: src/admin/tenants.ts:70

#### Parameters

##### tenantId

`string`

##### data

`UpdateTenantOptions`

#### Returns

`Promise`\<[`Tenant`](../interfaces/Tenant.md)\>
