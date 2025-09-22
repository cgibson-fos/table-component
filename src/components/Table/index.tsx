import { DetailedHTMLProps, JSX, PropsWithChildren, TableHTMLAttributes } from "react";
import { TableHeaders } from "./TableHeaders";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { SortableTableCell } from "./SortableTableCell";

export interface TableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {

}

export function Table(props: PropsWithChildren<TableProps>): JSX.Element {
    const { children, ...rest } = props

    return (
        <table {...rest}>
            {children}
        </table>
    )
}

Table.Body = TableBody
Table.Cell = TableCell
Table.HeaderCell = TableCell
Table.Headers = TableHeaders
Table.SortableCell = SortableTableCell