import prisma from '@/prisma'
import { Response, Request } from 'express'


export class TransactionController {
    async createTransaction(req : Request , res : Response) {
        try {
           const transaction= await prisma.transaction.create({
            data : req.body
           })

        res.status(201).send ({
            status : 'ok' ,
            message : 'transaction Success'
        })
            
        } catch (err) {
            res.status(400).send ({
                status : 'error' ,
                message : err
            })
            
        }
    }
}