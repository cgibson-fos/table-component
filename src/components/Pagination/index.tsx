import { JSX, PropsWithChildren } from "react";
import { PaginationController } from "./controller";
import { PageLimitSelector } from "./PageLimitSelector";
import { CommonPageButtons } from "./Buttons/CommonPageButtons";
import { PageAdvanceButton } from "./Buttons/PageAdvanceButton";
import { FirstPageButton } from "./Buttons/FirstPageButton";
import { LastPageButton } from "./Buttons/LastPageButton";
import { HiddenButtonGroup } from "./Buttons/HiddenButtonGroup";
import { PageButtonGroup } from "./Buttons/PageButtonGroup";
import { PageButtons } from "./Buttons/PageButtons";
import { PageButton } from "./Buttons/PageButton";
import { CommonPaginationControls } from "./CommonPaginationControls";

export function Pagination(props: PropsWithChildren): JSX.Element {
    const { children } = props

    return <PaginationController>
        {children}
    </PaginationController>
}

Pagination.PageButton = PageButton
Pagination.CommonControls = CommonPaginationControls
Pagination.CommonPageButtons = CommonPageButtons
Pagination.FirstPageButton = FirstPageButton
Pagination.HiddenButtonGroup = HiddenButtonGroup
Pagination.LastPageButton = LastPageButton
Pagination.PageAdvanceButton = PageAdvanceButton
Pagination.PageButtonGroup = PageButtonGroup
Pagination.PageButtons = PageButtons
Pagination.PageLimitSelector = PageLimitSelector