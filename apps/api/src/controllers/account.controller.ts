import { Request, Response } from 'express';
import {compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'
import prisma from '@/prisma';

export class AccountController {
       
    async verifyAccount(req: Request, res: Response) {
        const d = new Date();
        d.setHours(0)
        d.setMinutes(0)
        d.setSeconds(0)
        d.setMilliseconds(0)
        const expireDate = d.setMonth(d.getMonth() + 3);
        try {
            if (req.user?.accountType == "user") {
                if (req.user?.refCode !== undefined) {
                    await prisma.user.update({
                        data: {
                           isReedem: false,
                           isActive: true,
                           RedeemExpire: new Date(expireDate)
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

                await prisma.pointUser.create({
                    data:{
                        userId: req.user?.userId!,
                        expireAt: new Date(expireDate)
                    }
                })
                const userPoint = await prisma.pointUser.aggregate({
                    where: {
                        userId: req.user?.id,
                        isRedeem: false
                    },
                    _sum: {
                        point: true
                    },
                    _min: {
                        expireAt: true
                    }
                })
                const expireSoonPoint = await prisma.pointUser.aggregate({
                    where: {
                        expireAt: new Date(userPoint._min?.expireAt!),
                        isRedeem: false,
                        userId: user.id
                    },
                    _sum: {
                        point: true
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
                        accountType: user?.accountType,
                        image: user?.profile
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
                        accountType: organizer?.accountType,
                        image : organizer?.profile
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
    
    async profileUpload(req: Request, res: Response) {
        try {
            const {file} = req
            if (!file) throw "No file uploaded"
            const imageUrl = `http://localhost:8000/public/images/${file.filename}`
            if (req.user?.accountType == "user") {
                await prisma.user.update({
                    data: {
                        profile: imageUrl
                    }, where: {
                        id: req.user?.id
                    }
                })
            }
            if (req.user?.accountType == "organizer") {
                await prisma.organizer.update({
                    data: {
                        profilePicture: imageUrl
                    }, where: {
                        id: req.user?.id
                    }
                })
            }
            res.status(200).send({ 
                status: 'ok',
                message: 'image successfully uploaded'
            })
        } catch (error) {
            res.status(400).send({
                status: 'error',
                message: error
            })
        }
    }
}