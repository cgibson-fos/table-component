import { Button, ButtonTypeMap, ExtendButtonBase } from "@mui/material";
import { JSX } from "react";
import { usePageButtonController } from "./hooks";

export interface PageButtonProps extends Omit<ExtendButtonBase<ButtonTypeMap>, 'onClick'> {
    pageNumber: number
}

export function PageButton(props: PageButtonProps): JSX.Element {
    const { pageNumber } = props

    const { handlePageButtonClick } = usePageButtonController()

    return <Button onClick={() => handlePageButtonClick(pageNumber)}>{pageNumber}</Button>
}