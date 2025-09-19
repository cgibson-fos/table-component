import { AccessorKeyColumnDef, createColumnHelper } from "@tanstack/react-table"
import { User } from "../../types"
import { Table } from "../Table"

export function buildColumnDefinitions(): AccessorKeyColumnDef<User, any>[] {
    const columnHelper = createColumnHelper<User>()
    
    return [
        columnHelper.accessor('id', {
            header: () => <Table.HeaderCell>ID</Table.HeaderCell>,
        }),
        columnHelper.accessor('name', {
            header: () => <Table.HeaderCell>Name</Table.HeaderCell>,
        }),
        columnHelper.accessor('username', {
            header: () => <Table.HeaderCell>Username</Table.HeaderCell>,
        }),
        columnHelper.accessor('email', {
            header: () => <Table.HeaderCell>Email</Table.HeaderCell>,
        }),
        columnHelper.accessor('role', {
            header: () => <Table.HeaderCell>Role</Table.HeaderCell>,
        }),
        columnHelper.accessor('isActive', {
            header: () => <Table.HeaderCell>IsActive</Table.HeaderCell>,
        }),
    ]
}