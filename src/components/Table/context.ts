import { Table } from "@tanstack/react-table";
import { createContext } from "react";

export interface TableContextValue<T> {
    tableInstance: Table<T>
}

export const TableContext = createContext<TableContextValue<any>>({
    tableInstance: {} as Table<any>
})