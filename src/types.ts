export type SortDirection = 'asc' | 'desc'

export interface User {
    id: number
    username: string
    email: string
    name: string
    role: string
    isActive: boolean
    [key: string]: number | string | boolean
}

export interface SortDescription {
    direction: SortDirection
    field: string
}
