import { SortDescription, User } from "../../types"
import usersData from "./data/test-users.json"

const globalUserStorage = [...usersData]

function limitUsers(limit: number, page: number): User[] {
    const startIndex = page * limit
    const users = 
        startIndex < globalUserStorage.length 
            ? globalUserStorage.slice(startIndex, startIndex + limit)
            : []

    return users
}

function sortUsers(sortDescription?: SortDescription): User[] {
    if (sortDescription) {
        globalUserStorage.sort(function (a: User, b: User): number {
            if (sortDescription) {
                const { direction, field } = sortDescription

                if (direction === 'asc') {
                    if (a[field] < b[field]) return -1
                    if (a[field] > b[field]) return 1                
                } else if (direction === 'desc') {
                    if (a[field] < b[field]) return 1
                    if (a[field] > b[field]) return -1
                }
            }
            return 0
        })
    }

    return globalUserStorage
}

export function getTotalUsers(): number {
    return globalUserStorage.length
}

export function getUsers(limit: number, page: number, sortDescription?: SortDescription): User[] {
    sortUsers(sortDescription)
    return limitUsers(limit, page)
}