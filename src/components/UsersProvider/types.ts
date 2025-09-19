import { User } from "../../types"

export interface UsersHookResult {
    pagedUsers: User[]
    totalUserCount: number
}
