[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / RbacResource

# Class: RbacResource

Defined in: [src/admin/rbac.ts:35](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L35)

## Constructors

### Constructor

> **new RbacResource**(`client`, `tenantId`): `RbacResource`

Defined in: [src/admin/rbac.ts:36](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L36)

#### Parameters

##### client

`ApiClient`

##### tenantId

`string`

#### Returns

`RbacResource`

## Methods

### addPermissionToRole()

> **addPermissionToRole**(`roleId`, `permissionId`): `Promise`\<\{ `status`: `string`; \}\>

Defined in: [src/admin/rbac.ts:84](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L84)

#### Parameters

##### roleId

`string`

##### permissionId

`string`

#### Returns

`Promise`\<\{ `status`: `string`; \}\>

***

### assignRole()

> **assignRole**(`userId`, `roleId`, `assignedBy?`): `Promise`\<\{ `status`: `string`; \}\>

Defined in: [src/admin/rbac.ts:94](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L94)

#### Parameters

##### userId

`string`

##### roleId

`string`

##### assignedBy?

`string`

#### Returns

`Promise`\<\{ `status`: `string`; \}\>

***

### createPermission()

> **createPermission**(`data`): `Promise`\<[`Permission`](../interfaces/Permission.md)\>

Defined in: [src/admin/rbac.ts:68](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L68)

#### Parameters

##### data

###### action

`string`

###### description?

`string`

###### name?

`string`

###### resource

`string`

###### type?

`string`

#### Returns

`Promise`\<[`Permission`](../interfaces/Permission.md)\>

***

### createRole()

> **createRole**(`data`): `Promise`\<[`Role`](../interfaces/Role.md)\>

Defined in: [src/admin/rbac.ts:50](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L50)

#### Parameters

##### data

###### description?

`string`

###### name

`string`

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)\>

***

### deleteRole()

> **deleteRole**(`roleId`): `Promise`\<`void`\>

Defined in: [src/admin/rbac.ts:63](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L63)

#### Parameters

##### roleId

`string`

#### Returns

`Promise`\<`void`\>

***

### getRole()

> **getRole**(`roleId`): `Promise`\<[`Role`](../interfaces/Role.md)\>

Defined in: [src/admin/rbac.ts:59](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L59)

#### Parameters

##### roleId

`string`

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)\>

***

### listPermissions()

> **listPermissions**(): `Promise`\<[`Permission`](../interfaces/Permission.md)[]\>

Defined in: [src/admin/rbac.ts:78](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L78)

#### Returns

`Promise`\<[`Permission`](../interfaces/Permission.md)[]\>

***

### listRolePermissions()

> **listRolePermissions**(`roleId`): `Promise`\<[`Permission`](../interfaces/Permission.md)[]\>

Defined in: [src/admin/rbac.ts:88](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L88)

#### Parameters

##### roleId

`string`

#### Returns

`Promise`\<[`Permission`](../interfaces/Permission.md)[]\>

***

### listRoles()

> **listRoles**(): `Promise`\<[`Role`](../interfaces/Role.md)[]\>

Defined in: [src/admin/rbac.ts:54](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L54)

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)[]\>

***

### listUserRoles()

> **listUserRoles**(`userId`): `Promise`\<[`Role`](../interfaces/Role.md)[]\>

Defined in: [src/admin/rbac.ts:101](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L101)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)[]\>

***

### removeUserRole()

> **removeUserRole**(`userId`, `roleId`): `Promise`\<`void`\>

Defined in: [src/admin/rbac.ts:106](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/rbac.ts#L106)

#### Parameters

##### userId

`string`

##### roleId

`string`

#### Returns

`Promise`\<`void`\>
