import { useContext } from "react";
import { PageButtonContext, PageButtonContextValue } from "./context";

export function usePageButtonController(): PageButtonContextValue {
    const context = useContext(PageButtonContext)
    if (!context)
        throw new Error('Must be with the <PageButtonController /> component.')

    return context
}