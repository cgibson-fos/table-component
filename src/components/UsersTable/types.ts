import { AccessorKeyColumnDef } from "@tanstack/react-table"
import { User } from "../../types"

export interface UsersTableHookResult {
    columnDefinitions: AccessorKeyColumnDef<User, string>[]
}

export interface UsersHookResult {
    pagedUsers: User[]
    totalUserCount: number
}