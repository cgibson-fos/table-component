import { createContext } from "react"

export interface PageButtonContextValue {
    handlePageButtonClick: (pageNumber: number) => void
}

export const PageButtonContext = createContext<PageButtonContextValue>({
    handlePageButtonClick: () => {}
})