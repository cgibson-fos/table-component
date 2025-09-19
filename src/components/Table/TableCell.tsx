import { JSX, PropsWithChildren } from "react";

export function TableCell(props: PropsWithChildren): JSX.Element {
    const { children } = props
    
    return <span>{children}</span>
}