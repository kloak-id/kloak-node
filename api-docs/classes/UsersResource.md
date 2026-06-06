[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / UsersResource

# Class: UsersResource

Defined in: [src/admin/users.ts:51](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/users.ts#L51)

## Constructors

### Constructor

> **new UsersResource**(`client`, `tenantId`): `UsersResource`

Defined in: [src/admin/users.ts:52](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/users.ts#L52)

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

Defined in: [src/admin/users.ts:86](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/users.ts#L86)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`userId`): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: [src/admin/users.ts:72](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/users.ts#L72)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

***

### list()

> **list**(`opts?`): `Promise`\<[`Paginated`](../interfaces/Paginated.md)\<[`User`](../interfaces/User.md)\>\>

Defined in: [src/admin/users.ts:61](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/users.ts#L61)

#### Parameters

##### opts?

`ListUsersOptions` = `{}`

#### Returns

`Promise`\<[`Paginated`](../interfaces/Paginated.md)\<[`User`](../interfaces/User.md)\>\>

***

### update()

> **update**(`userId`, `data`): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: [src/admin/users.ts:76](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/users.ts#L76)

#### Parameters

##### userId

`string`

##### data

`UpdateUserOptions`

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>
