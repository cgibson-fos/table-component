import { JSX } from "react";
import { usePagination } from "../hooks";
import { PageButton } from "./PageButton";

export function LastPageButton(): JSX.Element {
    const { pagination: { page, totalPages } } = usePagination()

    const moreThanFourPagesBeforeTheLastPage = (totalPages - page) > 3
    
    return <>
        {moreThanFourPagesBeforeTheLastPage && <PageButton pageNumber={totalPages} />}
    </>
}