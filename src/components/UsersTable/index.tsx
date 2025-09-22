import { JSX, PropsWithChildren, useEffect, useState } from "react";
import { TableProvider } from "../Table/provider";
import usersData from "./data/test-users.json"
import { Table, TableProps } from "../Table";
import { SortDescription, SortDirection, User } from "../../types";
import { usersColumnDefinitions } from "./columnDefinitions";
import { usePagination } from "../Pagination/hooks";
import { getUsers } from "./operations";

export function UsersTable(props: PropsWithChildren<TableProps>): JSX.Element {
    const { children, ...rest } = props

    const [sortDescription, setSortDescription] = useState<SortDescription>()
    const [users, setUsers] = useState<User[]>([])

    const { pagination: { limit, page }, setTotal } = usePagination()

    useEffect(() => {
        setTotal(usersData.length)
    }, [])

    useEffect(() => {
        const users = getUsers(limit, page, sortDescription)
        setUsers(users)
    }, [limit, page, sortDescription])

    const sort = (field: string, direction: SortDirection) => {
        console.log('sorting', { field, direction })
        setSortDescription({ field, direction })
    }

    return (
        <TableProvider columnDefinitions={usersColumnDefinitions} data={users} sort={sort}>
            <Table {...rest}>
                <Table.Headers />
                <Table.Body />
            </Table>
        </TableProvider>
    )
}
