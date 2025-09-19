import { useMemo } from "react";
import { UsersTableHookResult } from "./types";
import { buildColumnDefinitions } from "./builders";

export function useUsersTable(): UsersTableHookResult {
    const columnDefinitions = useMemo(() => {
        return buildColumnDefinitions()
    }, [])

    const result: UsersTableHookResult = {
        columnDefinitions,
    }
    return result
}