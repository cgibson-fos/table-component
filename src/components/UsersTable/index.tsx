import { JSX, PropsWithChildren } from "react";
import { TableProvider } from "../Table/provider";
import { useUsersTable } from "./hooks";
import { Table, TableProps } from "../Table";
import { useUsers } from "../UsersProvider/hooks";

export function UsersTable(props: PropsWithChildren<TableProps>): JSX.Element {
    const { children, ...rest } = props

    const { pagedUsers } = useUsers()
    const { columnDefinitions } = useUsersTable()

    return (
        <TableProvider columnDefinitions={columnDefinitions} data={pagedUsers}>
            <Table {...rest}>
                { children }
            </Table>
        </TableProvider>
    )
}
