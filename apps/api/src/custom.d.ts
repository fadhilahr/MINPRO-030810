type Event = {
    id : number
}

declare namespace Express {
    export interface Request {
        event? : Event
    }
}

type Transaction = {
    id : number
}

declare namespace Express {
    export interface Request {
        transaction? : Transaction
    }
}