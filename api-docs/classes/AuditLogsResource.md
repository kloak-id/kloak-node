[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / AuditLogsResource

# Class: AuditLogsResource

Defined in: [src/admin/auditLogs.ts:19](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/auditLogs.ts#L19)

## Constructors

### Constructor

> **new AuditLogsResource**(`client`, `tenantId`): `AuditLogsResource`

Defined in: [src/admin/auditLogs.ts:20](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/auditLogs.ts#L20)

#### Parameters

##### client

`ApiClient`

##### tenantId

`string`

#### Returns

`AuditLogsResource`

## Methods

### list()

> **list**(`options?`): `Promise`\<[`Paginated`](../interfaces/Paginated.md)\<[`AuditLog`](../interfaces/AuditLog.md)\>\>

Defined in: [src/admin/auditLogs.ts:29](https://github.com/kloak-id/kloak-node/blob/272d68106c44ccf49dfd78e66b9d232f4e4daa7e/src/admin/auditLogs.ts#L29)

#### Parameters

##### options?

###### action?

`string`

###### page?

`number`

###### pageSize?

`number`

###### userId?

`string`

#### Returns

`Promise`\<[`Paginated`](../interfaces/Paginated.md)\<[`AuditLog`](../interfaces/AuditLog.md)\>\>
