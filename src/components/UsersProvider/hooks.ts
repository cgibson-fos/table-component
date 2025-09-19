import { useEffect, useMemo } from "react"
import { usePagination } from "../Pagination/hooks"
import { UsersHookResult } from "./types"
import userData from "./data/test-users.json"

export function useUsers(): UsersHookResult {
    const { pagination: { limit, page }, setTotal } = usePagination() 

    const users = useMemo(() => {
        const startIndex = page * limit
        const pagedUsers = startIndex < userData.length 
            ? userData.slice(startIndex, startIndex + limit)
            : []
        return pagedUsers
    }, [limit, page])

    useEffect(() => {
        setTotal(userData.length)
    }, [])

    return {
        pagedUsers: users,
        totalUserCount: userData.length,
    }
}