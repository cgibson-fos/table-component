import { JSX, PropsWithChildren, useState } from "react";
import { PaginationContext, PaginationContextValue } from "./context";
import { DEFAULT_PAGE_LIMIT } from "./consts";

export function PaginationController(props: PropsWithChildren): JSX.Element {
    const { children } = props

    const [limit, setLimit] = useState<number>(DEFAULT_PAGE_LIMIT)
    const [page, setPage] = useState<number>(0)
    const [totalCount, setTotalCount] = useState<number>(103947)

    const context: PaginationContextValue = {
        limit,
        page,
        totalCount,

        setLimit,
        setPage,
        setTotalCount,
    }

    return <PaginationContext.Provider value={context}>{children}</PaginationContext.Provider>
}