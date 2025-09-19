import { createContext } from "react";
import { User } from "../../types";

export interface UsersContextValue {
    users: User[]
}

export const UsersTableContext = createContext<UsersContextValue>({
    users: []
})