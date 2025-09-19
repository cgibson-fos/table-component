import { JSX } from "react";
import { useTable } from "./hooks";
import { flexRender } from "@tanstack/react-table";

export function TableHeaders<T>(): JSX.Element {
    const { 
        tableInstance : {
            getHeaderGroups
        }
    } = useTable<T>()

    return <thead>
        { getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
                {
                    headerGroup.headers.map(header => (
                        <th key={header.id}>
                            { flexRender(header.column.columnDef.header, header.getContext()) }
                        </th>
                    ))
                }
            </tr>
        ))}
    </thead>
}