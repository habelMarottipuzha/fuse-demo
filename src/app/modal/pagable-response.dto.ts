 export interface PageableResponse<T> {
    content: T[]
    pageable: string
    last: boolean
    totalPages: number
    totalElements: number
    first: boolean
    size: number
    number: number
    sort: any[]
    numberOfElements: number
    empty: boolean
}