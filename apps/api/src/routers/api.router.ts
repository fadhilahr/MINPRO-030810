import { Router } from "express";
import { UserRouter } from "./user.router";
import { SampleRouter } from "./sample.router";
import { EventRouter } from "./event.router";

export class ApiRouter {
    private userRouter : UserRouter;
    private sampleRouter : SampleRouter;
    private eventRouter : EventRouter
    private router : Router

    constructor () {
        this.router = Router()
        this.userRouter = new UserRouter()
        this.sampleRouter = new SampleRouter()
        this.eventRouter = new EventRouter()
        this.initializeRoutes()
    }

    private initializeRoutes() : void {
        this.router.use('/users' , this.userRouter.getRouter())
        this.router.use('/samples', this.sampleRouter.getRouter())
        this.router.use('/events' , this.eventRouter.getRouter())

    }
    getRouter () {
        return this.router
    }


}