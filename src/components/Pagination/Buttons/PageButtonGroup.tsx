import { JSX } from "react";
import { usePagination } from "../hooks";
import { PageButton } from "./PageButton";

export function PageButtonGroup(): JSX.Element {
    const { pagination: { page, totalPages } } = usePagination()

    const endPageDelta = totalPages - page
    const numberOfMiddlePageButtons = 
        page < 2 
            ? 2 
            : endPageDelta < 4
                ? endPageDelta
                : 3

    const startMiddleButtonPageNumber = page > 1 ? page : page + 1

    return <>
    {
        Array.from({ length: numberOfMiddlePageButtons })
            .map((_, index) => {
                const pageNumber = index + startMiddleButtonPageNumber
                return <PageButton key={pageNumber} pageNumber={pageNumber} />
            })
    }
    </>
}