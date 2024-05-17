import { Request, Response } from 'express';
import {compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'
import prisma from '@/prisma';

export class AccountController {
       
    async verifyAccount(req: Request, res: Response) {
        try {
            if (req.user?.accountType == "user") {
                if (req.user?.refCode !== undefined) {
                    await prisma.user.update({
                        data: {
                           isReedem: false
                        },
                        where: {
                            id: req.user?.id
                        }
                    })
                }
                const user = await prisma.user.update({
                    data: {
                        isActive: true,
                    },
                    where: {
                        id: req.user?.id
                    }
                })
                const payload = {id: user.id, accountType: user.accountType}
                const token = sign(payload, process.env.KEY_JWT!, {expiresIn: '1d'})
                res.status(200).send({
                    status: 'ok',
                    message: 'user verified',
                    user,
                    token
                })
            }
            if (req.user?.accountType == "organizer") {
                const organizer = await prisma.organizer.update({
                    data: {
                        isActive: true,
                    },
                    where: {
                        id: req.user?.id
                    }
                })
                const payload = {id: organizer.id, accountType: organizer.accountType}
                const token = sign(payload, process.env.KEY_JWT!, {expiresIn: '1d'})
                res.status(200).send({
                    status: 'ok',
                    message: 'organizer verified',
                    organizer,
                    token
                }) 
            }
        } catch (error) {
            res.status(400).send({
                status: "error",
                message: error
            })
        }
    }

    async getAccount(req: Request, res: Response) {
        try {
            if (req.user?.accountType == "user") {
                const user = await prisma.user.findUnique({
                    where: {
                        id: req.user?.id
                    }
                })
                res.status(200).send({
                    status : "ok",
                    message : "user found",
                    userData: {
                        id : user?.id,
                        name: user?.name,
                        email: user?.email,
                        accountType: user?.accountType
                    }
                })
            }
            if (req.user?.accountType == "organizer") {
                const organizer = await prisma.user.findUnique({
                    where : {
                        id: req.user?.id
                    }
                })
                res.status(200).send({
                    status : "ok",
                    message : "user found",
                    userData: {
                        id: organizer?.id,
                        name : organizer?.name,
                        email : organizer?.email,
                        accountType: organizer?.accountType
                    }
                })
            }
                
            
            
        } catch (error) {
            res.status(400).send({
                status: "error",
                message: error
            })      
        }
    }

    async getAccountType(req: Request, res: Response) {
        try {
            const accountType = req.user?.accountType
            res.status(200).send(({
                status: 'ok',
                message: 'accountType found',
                accountType
            }))
        } catch (error) {
            res.status(400).send({
                status: 'error',
                message: error
            })
        }
    }
    

}