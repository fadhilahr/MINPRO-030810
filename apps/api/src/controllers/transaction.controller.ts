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
            message : 'transaction success',
            ticketOrder
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

    async getWaitingConfirmationSlug(req : Request , res : Response) {
        try {
            const transaction = await prisma.transaction.findMany({
                where : {
                    eventId : +req.params.slug,
                    status : "WaitingConfirmation"
                }
            })
            const event = await prisma.event.findFirst({
                where : {
                    id : +req.params.slug
                }
            })
            res.status(200).send({
                status : 'ok',
                message : 'transaction found',
                transaction,
                event
            })
        } catch (err) {
            res.status(400).send({
                status : 'error',
                message : err
            })
            
        }
    }
    async paymentUpload ( req : Request, res : Response) {
        try {
            const {file} = req
            if (!file) throw "No File Uploaded"
            const imageUrl = `http://localhost:8000/public/images/${file.filename}`
            await prisma.transaction.update({
                data : {
                    imageUrl : imageUrl,
                    status : "WaitingConfirmation",
                    paidAt : new Date()
                },
                where : {
                    id : +req.params.slug
                }
            })
            res.status(200).send({
                status: 'ok',
                message : 'payment recieved, waiting for confirmation'
            })
        } catch (err) {
            res.status(400).send ({
                status : 'error',
                message : err
            })
        }
    }

    async paymentConfirmation (req: Request, res: Response ){
        try {
            const transaction = await prisma.transaction.update({
                data : {
                    status : 'Paid'
                },
                where : {
                    id : +req.params.slug
                }
            })
            const event = await prisma.event.findUnique({
                where : {
                    id : transaction.eventId
                }
            })
            await prisma.event.update({
                where : {
                    id : transaction.eventId
                },
                data : {
                    availableTickets : event?.availableTickets! - transaction.quantity
                }
            })
            res.status(200).send({
                status : 'ok',
                message : 'payment confirmed'
            })

        } catch (err) {
            res.status(400).send({
                status : 'err',
                message : err
            })
            
        }
    }

    async paymentDecline( res : Response , req :Request) {
        try {
            const transaction = await prisma.transaction.update({
                data : {
                    status : 'Declined'
                },
                where : {
                    id : +req.params.slug
                }
            })
            if (transaction.PointUsed) {
             await prisma.pointUser.updateMany({
                where : {
                    userId : req.user?.id
                },
                data : {
                    isRedeem : false
                }
              })       
            }
            if (transaction.useReferral) {
                await prisma.user.update({
                    where : {
                        id : req.user?.id
                    },
                    data : {
                        isReedem : false
                    }
                })
            }
            res.status(200).send({
                status : 'ok',
                message : 'payment declined'
            })
            
        } catch (err) {
            res.status(400).send({
                status : 'error',
                message : err
            })
            
        }
    }

    async getTransactionDetails(req: Request, res: Response) {
        try {
          let dateStart 
          let dateEnd
          const now = new Date();
          const { filter } = req.query
    
          if (filter == 'year') {
            dateStart = new Date(now.getFullYear(), 0, 1)
            dateEnd = new Date()
          } else if (filter == 'month') {
              dateStart = new Date(now.getFullYear(), now.getMonth(), 1)
              dateEnd = new Date()
          } else if (filter == 'day') {
              dateStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
              dateEnd = new Date()  
          }
    
          const transactionDetails = await prisma.transaction.aggregate({
            where: {
                status: "Paid",
                event: {
                    slug: req.params.slug
                },
                createdAt: {
                  gte: dateStart,
                  lte: dateEnd
                }
            },
            _sum: {
                quantity: true,
                grandTotal: true
            }, 
            _count: {
                status: true
            }
          })
    
          const transactions = await prisma.transaction.findMany({
            where: {
                status: "Paid",
                event: {
                    slug: req.params.slug
                },
                createdAt: {
                    gte: dateStart,
                    lte: dateEnd
                }
            },
            select: {
                quantity: true,
                grandTotal: true,
                createdAt: true,
                status: true
            }
          });
    
          console.log('data', transactions);
    
          const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
    
        let groupedTransactions: any = {};
        if (filter === 'year') {
            transactions.forEach(transaction => {
              const month = transaction.createdAt.getMonth();
              const key = `${monthNames[month]}`
    
              if (!groupedTransactions[key]) {
                  groupedTransactions[key] = {
                      category: key, 
                      tickets: 0,
                      revenues: 0,
                      transactions: 0
                  };
              }
              groupedTransactions[key].tickets += transaction.quantity;
              groupedTransactions[key].revenues += transaction.grandTotal;
              groupedTransactions[key].transactions += 1;
            });
        } else if (filter === 'month') {
            transactions.forEach(transaction => {
              const date = transaction.createdAt.getDate()
              const key = `${date}`
    
              
              if (!groupedTransactions[key]) {
                groupedTransactions[key] = {
                    category: key, 
                    tickets: 0,
                    revenues: 0,
                    transactions: 0
                };
              }
              groupedTransactions[key].tickets += transaction.quantity;
              groupedTransactions[key].revenues += transaction.grandTotal;
              groupedTransactions[key].transactions += 1;
            })
        } else if (filter === 'day') {
            transactions.forEach(transaction => {
              const hour = transaction.createdAt.getHours()
              const key = `${hour}`
    
              
              if (!groupedTransactions[key]) {
                groupedTransactions[key] = {
                    category: key, 
                    tickets: 0,
                    revenues: 0,
                    transactions: 0
                };
              }
              groupedTransactions[key].tickets += transaction.quantity;
              groupedTransactions[key].revenues += transaction.grandTotal;
              groupedTransactions[key].transactions += 1;
            })
        } 
    
        const groupedTransactionArray = filter === 'year' || filter === 'month' || filter === 'day'   
        ? Object.values(groupedTransactions) 
        : groupedTransactions;
    
        res.status(200).send({
            status: 'ok',
            message: 'transaction details found',
            details: groupedTransactionArray,
            summary: {
              ticketSold: transactionDetails._sum.quantity,
              totalRevenue: transactionDetails._sum.grandTotal,
              totalTransaction: transactionDetails._count.status,
            }
        });
    
        } catch (error) {
          res.status(400).send({
            status: 'error',
            message: error
          })
        }
      }
}

