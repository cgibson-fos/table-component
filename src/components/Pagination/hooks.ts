import { useContext } from "react";
import { PaginationContext } from "./context";
import { PaginationSettings } from "./types";

export interface UsePaginationHookResult {
    pagination: PaginationSettings,

    changePage: (page: number) => void
    changePageLimit: (limit: number) => void
    setTotal: (total: number) => void
}

export function usePagination(): UsePaginationHookResult {
    const context = useContext(PaginationContext)
    if (!context)
        throw new Error("Must be with the <PaginationController />.")

    const { limit, page, totalCount, setLimit, setPage, setTotalCount } = context
    const totalPages = Math.ceil(totalCount / limit)

    return {
        pagination: { 
            limit, 
            page, 
            totalCount,
            totalPages,
         },

        changePage: (page: number) => {
            setPage(Math.min(Math.max(page, 0), totalPages - 1))
        },

        changePageLimit: (limit: number) => {
            setLimit(prev => {
                const newPage = Math.floor(page / (limit / prev))
                setPage(newPage)
                return limit
            })
        },

        setTotal: setTotalCount
    }
}