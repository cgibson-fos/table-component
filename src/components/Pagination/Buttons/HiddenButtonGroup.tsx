import { Button } from "@mui/material";
import { JSX } from "react";

export interface HiddenButtonGroupProps {
    show: boolean
}

export function HiddenButtonGroup(props: HiddenButtonGroupProps): JSX.Element {
    const { show } = props

    return <>
        {show && <Button>...</Button>}
    </>
}