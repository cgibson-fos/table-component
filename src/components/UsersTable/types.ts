import { AccessorKeyColumnDef } from "@tanstack/react-table"
import { User } from "../../types"
import { ReactNode } from "react"

export interface UsersTableHookResult {
    columnDefinitions: AccessorKeyColumnDef<User, any>[]
}