import { createContext } from "react";
import { User } from "../../types";

export interface UsersContextValue {
    users: User[]
}

export const UsersContext = createContext<UsersContextValue>({
    users: []
})