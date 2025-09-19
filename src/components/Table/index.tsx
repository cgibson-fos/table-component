import { DetailedHTMLProps, JSX, PropsWithChildren, TableHTMLAttributes } from "react";
import { TableHeaders } from "./TableHeaders";
import { TableBody } from "./TableBody";

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

Table.Headers = TableHeaders
Table.Body = TableBody