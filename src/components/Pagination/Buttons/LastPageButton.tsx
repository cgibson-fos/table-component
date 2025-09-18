import { JSX } from "react";
import { usePagination } from "../hooks";
import { DEFAULT_PAGE_BUTTON_LIMIT } from "./const";
import { PageButton } from "./PageButton";

export function LastPageButton(): JSX.Element {
    const { pagination: { limit, totalPages } } = usePagination()

    const numberOfButtons = limit ?? DEFAULT_PAGE_BUTTON_LIMIT
    
    return <>
        {totalPages > numberOfButtons && <PageButton pageNumber={totalPages} />}
    </>
}