import { JSX } from "react";
import { usePagination } from "../hooks";
import { Pagination } from "..";

export function CommonPageButtons(): JSX.Element {
    const { pagination: { page, totalPages } } = usePagination()

    const moreThanThreePages = totalPages > page + 2
    const moreThanFourPagesBeforeTheLastPage = (totalPages - page) > 3
    
    return <Pagination.PageButtons>
        <Pagination.PageAdvanceButton direction='prev' />
        <Pagination.FirstPageButton />
        <Pagination.HiddenButtonGroup show={page > 2} />
        <Pagination.PageButtonGroup />
        <Pagination.HiddenButtonGroup show={moreThanThreePages && moreThanFourPagesBeforeTheLastPage} />
        <Pagination.LastPageButton />
        <Pagination.PageAdvanceButton direction='next' />
    </Pagination.PageButtons>
}