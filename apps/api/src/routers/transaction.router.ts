import { TransactionController } from "@/controllers/transaction.controller";
import { uploader } from "@/helpers/uploader";
import { VerifyToken } from "@/middleware/token.middleware";
import { Router } from "express";


export class TransactionRouter{
    private router : Router;
    private transactionController : TransactionController;
    private verifyToken : VerifyToken;

    constructor() {
        this.router = Router();
        this.transactionController = new TransactionController()
        this.verifyToken = new VerifyToken()
        this.initializeRouter()
    }
    private initializeRouter() : void {
        this.router.get('/details/:slug', this.transactionController.getTransaction)
        this.router.post('/', this.verifyToken.verify, this.transactionController.createTransaction)
        this.router.patch('/payment-upload/:slug', this.verifyToken.verify, uploader("IMG", "/images").single('file'), this.transactionController.paymentUpload)
        this.router.patch('/confirmation/:slug', this.transactionController.paymentConfirmation)
        this.router.patch('decline/:slug', this.transactionController.paymentConfirmation)
        this.router.get('/waiting-confirmation/:slug', this.transactionController.getWaitingConfirmationSlug)
    }

    getRouter() : Router {
        return this.router;
    }

}