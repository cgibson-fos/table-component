import { createContext } from "react";

export interface PaginationContextValue {
    limit: number,
    page: number,
    totalCount: number,

    setLimit: (limit: number) => void,
    setPage: (page: number) => void,
    setTotalCount: (count: number) => void,
}

export const PaginationContext = createContext<PaginationContextValue>({
    limit: 0,
    page: 0,
    totalCount: 0,

    setLimit: () => {},
    setPage: () => {},
    setTotalCount: () => {},
})