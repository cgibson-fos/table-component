import { DetailedHTMLProps, JSX, PropsWithChildren, TableHTMLAttributes } from "react";
import { TableHeaders } from "./TableHeaders";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";

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
Table.HeaderCell = TableCell
Table.Headers = TableHeaders