import { Table } from "@tanstack/react-table";
import { createContext } from "react";
import { SortDirection } from "../../types";

export interface TableContextValue<T> {
    tableInstance: Table<T>

    sort?: (field: string, direction: SortDirection) => void
}

export const TableContext = createContext<TableContextValue<any>>({
    tableInstance: {} as Table<any>
})