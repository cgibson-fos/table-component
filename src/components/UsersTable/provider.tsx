import { JSX, PropsWithChildren, useEffect } from "react";
import { UsersTableContext } from "./context";
import { usePagination } from "../Pagination/hooks";
import { useUsers } from "./hooks";

export function UsersTableProvider(props: PropsWithChildren): JSX.Element {
    const { children } = props

    const { setTotal } = usePagination() 
    const { pagedUsers, totalUserCount } = useUsers()

    useEffect(() => {
        setTotal(totalUserCount)
    }, [])

    const context = {
        users: pagedUsers
    }

    return <UsersTableContext.Provider value={context}>{children}</UsersTableContext.Provider>
}