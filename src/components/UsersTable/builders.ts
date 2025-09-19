import { createColumnHelper } from "@tanstack/react-table"
import { User } from "../../types"

export function buildColumns() {
    const columnHelper = createColumnHelper<User>()
    
    return [
        columnHelper.accessor('name', {
            cell: info => info.getValue(),
            footer: info => info.column.id,
            header: () => 'Name',
        }),
        columnHelper.accessor('username', {
            cell: info => info.getValue(),
            footer: info => info.column.id,
            header: () => 'Username',
        }),
        columnHelper.accessor('email', {
            cell: info => info.getValue(),
            footer: info => info.column.id,
            header: () => 'Email',
        }),
        columnHelper.accessor('role', {
            cell: info => info.getValue(),
            footer: info => info.column.id,
            header: () => 'Role',
        }),
    ]
}