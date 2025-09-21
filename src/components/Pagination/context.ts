import { createContext, Dispatch, SetStateAction } from "react";

export interface PaginationContextValue {
    limit: number,
    page: number,
    totalCount: number,

    setLimit: Dispatch<SetStateAction<number>>,
    setPage: Dispatch<SetStateAction<number>>,
    setTotalCount: Dispatch<SetStateAction<number>>,
}

export const PaginationContext = createContext<PaginationContextValue>({
    limit: 0,
    page: 0,
    totalCount: 0,

    setLimit: () => {},
    setPage: () => {},
    setTotalCount: () => {},
})