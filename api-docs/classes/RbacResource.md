[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / RbacResource

# Class: RbacResource

Defined in: src/admin/rbac.ts:35

## Constructors

### Constructor

> **new RbacResource**(`client`, `tenantId`): `RbacResource`

Defined in: src/admin/rbac.ts:36

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

Defined in: src/admin/rbac.ts:84

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

Defined in: src/admin/rbac.ts:94

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

Defined in: src/admin/rbac.ts:68

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

Defined in: src/admin/rbac.ts:50

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

Defined in: src/admin/rbac.ts:63

#### Parameters

##### roleId

`string`

#### Returns

`Promise`\<`void`\>

***

### getRole()

> **getRole**(`roleId`): `Promise`\<[`Role`](../interfaces/Role.md)\>

Defined in: src/admin/rbac.ts:59

#### Parameters

##### roleId

`string`

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)\>

***

### listPermissions()

> **listPermissions**(): `Promise`\<[`Permission`](../interfaces/Permission.md)[]\>

Defined in: src/admin/rbac.ts:78

#### Returns

`Promise`\<[`Permission`](../interfaces/Permission.md)[]\>

***

### listRolePermissions()

> **listRolePermissions**(`roleId`): `Promise`\<[`Permission`](../interfaces/Permission.md)[]\>

Defined in: src/admin/rbac.ts:88

#### Parameters

##### roleId

`string`

#### Returns

`Promise`\<[`Permission`](../interfaces/Permission.md)[]\>

***

### listRoles()

> **listRoles**(): `Promise`\<[`Role`](../interfaces/Role.md)[]\>

Defined in: src/admin/rbac.ts:54

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)[]\>

***

### listUserRoles()

> **listUserRoles**(`userId`): `Promise`\<[`Role`](../interfaces/Role.md)[]\>

Defined in: src/admin/rbac.ts:101

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)[]\>

***

### removeUserRole()

> **removeUserRole**(`userId`, `roleId`): `Promise`\<`void`\>

Defined in: src/admin/rbac.ts:106

#### Parameters

##### userId

`string`

##### roleId

`string`

#### Returns

`Promise`\<`void`\>
