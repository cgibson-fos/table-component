import { AccessorKeyColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { JSX, PropsWithChildren } from "react";
import { TableContext, TableContextValue } from "./context";

export interface TableProviderProps<T> {
    columnDefinitions: AccessorKeyColumnDef<T, any>[]
    data: T[]
}

export function TableProvider<T>(props: PropsWithChildren<TableProviderProps<T>>): JSX.Element {
    const { children, columnDefinitions, data } = props

    const tableInstance = useReactTable<T>({
        columns: columnDefinitions,
        data,
        getCoreRowModel: getCoreRowModel()
    })

    const context: TableContextValue<T> = {
        tableInstance
    }

    return <TableContext.Provider value={context}>{children}</TableContext.Provider>
}