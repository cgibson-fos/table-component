import { JSX, PropsWithChildren } from "react";
import { Box, Button, Stack } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Table } from ".";
import { Header } from "@tanstack/react-table";
import { SortDirection } from "../../types";
import { useTable } from "./hooks";

export interface SortableTableCellProps<T> {
    header: Header<T, any>
}

export function SortableTableCell<T>(props: PropsWithChildren<SortableTableCellProps<T>>): JSX.Element {
    const { children, header } = props

    const { sort } = useTable()

    const handleSortOnClick = (direction: SortDirection) => {
        console.log('sort', header)
        sort?.(header.id, direction)
    }

    return <Table.Cell>
        <Box>{children}</Box>
       
            <Stack direction="column">
                 <Button onClick={() => handleSortOnClick('asc')}>
                    <ArrowDropUp />
                </Button>
                <Button onClick={() => handleSortOnClick('desc')}>
                    <ArrowDropDown />
                </Button>
            </Stack>
    </Table.Cell>
}