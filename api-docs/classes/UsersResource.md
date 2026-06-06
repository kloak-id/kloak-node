[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / UsersResource

# Class: UsersResource

Defined in: src/admin/users.ts:51

## Constructors

### Constructor

> **new UsersResource**(`client`, `tenantId`): `UsersResource`

Defined in: src/admin/users.ts:52

#### Parameters

##### client

`ApiClient`

##### tenantId

`string`

#### Returns

`UsersResource`

## Methods

### delete()

> **delete**(`userId`): `Promise`\<`void`\>

Defined in: src/admin/users.ts:86

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`userId`): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: src/admin/users.ts:72

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

***

### list()

> **list**(`opts?`): `Promise`\<[`Paginated`](../interfaces/Paginated.md)\<[`User`](../interfaces/User.md)\>\>

Defined in: src/admin/users.ts:61

#### Parameters

##### opts?

`ListUsersOptions` = `{}`

#### Returns

`Promise`\<[`Paginated`](../interfaces/Paginated.md)\<[`User`](../interfaces/User.md)\>\>

***

### update()

> **update**(`userId`, `data`): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: src/admin/users.ts:76

#### Parameters

##### userId

`string`

##### data

`UpdateUserOptions`

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>
