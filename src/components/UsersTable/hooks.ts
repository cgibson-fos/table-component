import { useMemo } from "react";
import { UsersHookResult, UsersTableHookResult } from "./types";
import { buildColumns } from "./builders";
import userData from "./data/test-users.json"
import { usePagination } from "../Pagination/hooks";

export function useUsers(): UsersHookResult {
    const { pagination: { limit, page } } = usePagination() 

    const users = useMemo(() => {
        const startIndex = page * limit
        const pagedUsers = startIndex < userData.length 
            ? userData.slice(startIndex, startIndex + limit)
            : []
        return pagedUsers
    }, [limit, page])
    return {
        pagedUsers: users,
        totalUserCount: userData.length,
    }
}

export function useUsersTable(): UsersTableHookResult {
    const columnDefinitions = useMemo(() => {
        return buildColumns()
    }, [])

    const result: UsersTableHookResult = {
        columnDefinitions
    }
    return result
}