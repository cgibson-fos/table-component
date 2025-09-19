import { JSX } from "react";
import { useTable } from "./hooks";
import { flexRender } from "@tanstack/react-table";

export function TableBody<T>(): JSX.Element {
    const { 
        tableInstance: {
            getRowModel
        }
    } = useTable<T>()

    return (
        <tbody>
            {
                getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {
                            row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {
                                        flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )
                                    }
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    )
}