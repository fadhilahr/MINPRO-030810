type Event = {
    id : number
}

declare namespace Express {
    export interface Request {
        event? : Event
    }
}

type User = {
    id: number
    accountType: string
    refCode?: string
}

declare namespace Express {
    export interface Request {
        user?: User
    }
}