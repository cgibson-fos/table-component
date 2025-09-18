import { Button, ButtonProps } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { JSX } from "react";
import { PageAdvanceDirection } from "./types";
import { usePageButtonController } from "../hooks";
import { usePagination } from "../../hooks";

export type PageAdvanceButtonProps = { 
    direction: PageAdvanceDirection
} & Omit<ButtonProps, 'onClick'>

export function PageAdvanceButton(props: PageAdvanceButtonProps): JSX.Element {
    const { direction, ...buttonProps } = props

    const { pagination: { page, totalPages } } = usePagination()
    const { handlePageButtonClick } = usePageButtonController()

    const pageToAdvanceTo = direction === 'prev'
        ? Math.max(page - 1, 0)
        : Math.min(page + 1, totalPages)

    return <Button {...buttonProps} onClick={() => handlePageButtonClick(pageToAdvanceTo)}>
        {direction === 'prev' && <ChevronLeftIcon />}
        {direction === 'next' && <ChevronRightIcon />}
    </Button>
}