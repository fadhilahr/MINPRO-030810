import { Request , Response } from "express";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient()

export class EventController {
    async getEvent (req : Request , res : Response) {
        
        try {
            const events = await prisma.event.findMany({
                
            })
            res.status(200).send({
                status : 'ok',
                events
            })

            
        } catch (err) {
            res.status(400).send({
                status : 'error',
                message : err
            })
            
        }
    }
    async getEventSlug (req : Request, res : Response) {
        try {
            const events = await prisma.event.findUnique({
                where :{
                    slug : req.params.slug
                }
            })
            res.status(200).send({
                status : 'ok',
                events
            })
            
        } catch (err) {
            res.status(400).send({
                status : 'error',
                message : err
            })
            
        }
    }
    async createEvent  (req : Request, res : Response) {
        try {
            const slug = req.body.name.toLowerCase().replaceAll(" ", "-")
            req.body.slug = slug
            await prisma.event.create({
                data : req.body
            })
            res.status(201).send({
                status : 'ok',
                message : 'Event Created!'
            })

        } catch (err) {
            res.status(400).send({
                status: 'error',
                message : err
            })
            
        }
    }
}