import { useContext } from "react";
import { TableContext, TableContextValue } from "./context";

export function useTable<T>(): TableContextValue<T> {
    const context = useContext(TableContext)
    if (!context)
        throw new Error("Must be within the <TableProvider /> component.")

    return context
}