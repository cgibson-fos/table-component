import { JSX } from "react";
import { usePagination } from "../hooks";
import { PageButton } from "./PageButton";

export function FirstPageButton(): JSX.Element {
    const { pagination: { page } } = usePagination()
    
    return <>
        {page > 0 && <PageButton pageNumber={1} />}
    </>
}