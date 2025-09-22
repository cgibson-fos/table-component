import { createColumnHelper } from "@tanstack/react-table"
import { User } from "../../types"
import { Table } from "../Table"

const columnHelper = createColumnHelper<User>()

export const usersColumnDefinitions = [
    columnHelper.accessor('id', {
        header: ({ header }) => <Table.SortableCell<User> header={header}>ID</Table.SortableCell>,
    }),
    columnHelper.accessor('name', {
        header: ({ header }) => <Table.SortableCell<User>  header={header}>Name</Table.SortableCell>,
    }),
    columnHelper.accessor('username', {
        header: ({ header }) => <Table.SortableCell<User>  header={header}>Username</Table.SortableCell>,
    }),
    columnHelper.accessor('email', {
        header: ({ header }) => <Table.SortableCell<User>  header={header}>Email</Table.SortableCell>,
    }),
    columnHelper.accessor('role', {
        header: ({ header }) => <Table.SortableCell<User>  header={header}>Role</Table.SortableCell>,
    }),
    columnHelper.accessor('isActive', {
        header: ({ header }) => <Table.SortableCell<User>  header={header}>IsActive</Table.SortableCell>,
    }),
]