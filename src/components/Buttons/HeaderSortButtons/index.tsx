import { JSX } from "react";
import { ChevronContainer } from "../../styled";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

export function HeaderSortButtons(): JSX.Element {
    return <ChevronContainer>
        <ArrowDropUp />
        <ArrowDropDown />
    </ChevronContainer>
}