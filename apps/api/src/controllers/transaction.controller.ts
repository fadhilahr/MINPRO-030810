import prisma from '@/prisma'
import { Response, Request } from 'express'


export class TransactionController {
    async createTransaction(req : Request , res : Response) {
        try {
           await prisma.$transaction(async (tx)=> {
            const ticketOrder = await tx.transaction.create({
                data : {
                    ...req.body,
                    userId :req.user?.id,
                    status : "WaitingPayment"

                }
                
            })
            if (ticketOrder.PointUsed) {
                await tx.pointUser.updateMany({
                    where : {
                        userId : req.user?.id
                    },
                    data : {
                        isRedeem: true
                    }
                })
            }
           
           

        res.status(201).send ({
            status : 'ok' ,
            message : 'transaction success'
        })
    })
            
        } catch (err) {
            res.status(400).send ({
                status : 'error' ,
                message : err
            })
            
        }
    }

    async getTransaction(req : Request , res : Response) {
        try {

            const events = await prisma.event.findMany()
            res.status(200).send ({
                status : 'ok',
                events
            })
            
        } catch (err) {
            res.status(400).send ({
                status : 'error',
                message : err
            })
            
        }
       
    }
    async paymentUpload ( req : Request, res : Response) {
        try {
            


        } catch (err) {
            
        }
    }
}

