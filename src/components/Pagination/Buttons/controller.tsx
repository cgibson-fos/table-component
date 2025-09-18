import { JSX, PropsWithChildren } from "react";
import { PageButtonContext, PageButtonContextValue } from "./context";
import { usePagination } from "../hooks";

export function PageButtonController(props: PropsWithChildren): JSX.Element {
    const { children } = props

    const { changePage } = usePagination()

    const context: PageButtonContextValue = {
        handlePageButtonClick: (pageNumber: number) => {
            console.log('change to page: ', pageNumber)
            changePage(pageNumber)
        }
    }
    return <PageButtonContext.Provider value={context}>{children}</PageButtonContext.Provider>
}