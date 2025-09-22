import { Stack } from "@mui/material";
import { JSX, PropsWithChildren } from "react";

export function TableCell(props: PropsWithChildren): JSX.Element {
    const { children } = props

    return <Stack direction="row" alignItems="center">{children}</Stack>
}