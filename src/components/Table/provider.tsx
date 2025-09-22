import { AccessorKeyColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { JSX, PropsWithChildren } from "react";
import { TableContext, TableContextValue } from "./context";
import { SortDirection } from "../../types";

export interface TableProviderProps<T> {
    columnDefinitions: AccessorKeyColumnDef<T, any>[]
    data: T[]
    sort?: (field: string, direction: SortDirection) => void
}

export function TableProvider<T>(props: PropsWithChildren<TableProviderProps<T>>): JSX.Element {
    const { children, columnDefinitions, data, sort } = props

    console.log('updating table provider', data)
    const tableInstance = useReactTable<T>({
        columns: columnDefinitions,
        data,
        getCoreRowModel: getCoreRowModel()
    })

    const context: TableContextValue<T> = {
        tableInstance,
        sort,
    }

    return <TableContext.Provider value={context}>{children}</TableContext.Provider>
}