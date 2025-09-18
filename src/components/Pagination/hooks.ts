import { useContext } from "react";
import { PaginationContext, PaginationContextValue } from "./context";
import { PaginationSettings } from "./types";

export interface UsePaginationHookResult {
    pagination: PaginationSettings,

    changePage: (page: number) => void
    changePageLimit: (limit: number) => void
}

export function usePagination(): UsePaginationHookResult {
    const context = useContext(PaginationContext)
    if (!context)
        throw new Error("Must be with the <PaginationController />.")

    const { limit, page, totalCount, setLimit, setPage } = context
    
    return {
        pagination: { 
            limit, 
            page, 
            totalCount,
            totalPages: Math.ceil(totalCount / limit)
         },

        changePage: (page: number) => {
            setPage(page)
        },

        changePageLimit: (limit: number) => {
            setLimit(limit)
        }
    }
}