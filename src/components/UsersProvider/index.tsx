import { JSX, PropsWithChildren, useEffect } from "react";
import { UsersContext, UsersContextValue } from "./context";
import { useUsers } from "./hooks";
import { usePagination } from "../Pagination/hooks";

export function UsersProvider(props: PropsWithChildren): JSX.Element {
    const { children } = props
    
    const { pagedUsers, totalUserCount } = useUsers()
    const { setTotal } = usePagination()

    useEffect(() => {
        setTotal(totalUserCount)
    }, [])

    const context: UsersContextValue = {
        users: pagedUsers,
    }
    return <UsersContext.Provider value={context}>{children}</UsersContext.Provider>
}