type Event = {
    id : number
}

type Transaction = {
    id : number
}

type User = {
    id: number
    accountType: string
    refCode?: string
    userId?: number
    email?: string 
}

declare namespace Express {
    export interface Request {
        user?: User
        event? : Event
        transaction ? : Transaction
    }
}