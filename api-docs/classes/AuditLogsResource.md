[**@kloak.id/node**](../README.md)

***

[@kloak.id/node](../globals.md) / AuditLogsResource

# Class: AuditLogsResource

Defined in: [src/admin/auditLogs.ts:19](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/auditLogs.ts#L19)

## Constructors

### Constructor

> **new AuditLogsResource**(`client`, `tenantId`): `AuditLogsResource`

Defined in: [src/admin/auditLogs.ts:20](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/auditLogs.ts#L20)

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

Defined in: [src/admin/auditLogs.ts:29](https://github.com/kloak-id/kloak-node/blob/3a1e16a5b857352b2fbaa80c57eb68cc1d483774/src/admin/auditLogs.ts#L29)

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
