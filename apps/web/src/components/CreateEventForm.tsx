'use client'

import React from "react"
import * as yup from 'yup'

const registerSchema = yup.object().shape({
    name: yup.string().required('name can not be empty'),
    startSale : yup.string().required('sale date can not be empty'),
    eventDate : yup.string().required( 'event date can not be empty'),
    price : yup.number(),
    category : yup.string(),
    address : yup.string(),
    city : yup.string(),
    availableTicket : yup.string(),
    description : yup.string()


})

export default function CreateEventForm() {
    return (
        <></>
    )
}