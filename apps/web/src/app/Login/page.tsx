'use client'

import { cilGroup, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'

const page = () => {
    return (
        <div className="flex h-screen flex-col bg-slate-900 transition-opacity ">
            <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                alt=""
                className="h-64 w-full object-cover"
            />
            <div className="flex flex-1 justify-center">
                <div className="mx-auto max-w-xxl px-4 py-8 text-center ">
                    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl uppercase pb-10">
                        Login Page
                    </h1>
                    <div className="flex items-center gap-4 w-full">
                    <img
                      alt=""
                      src="./images/logo1.png"
                      className="w-52 mx-auto"
                    />

                    </div>
                            <ul className="mt-4 flex gap-10 ">
                                <li>
                                    <a href="/Login/login.user" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-blue-400 hover:text-blue-500">
                                        <strong className="font-medium text-4xl text-white ">Log-In as Costumers </strong>
                                        <CIcon icon={cilUser} size="xxl" className='text-white hover:text-blue-500' />
                                    </a>
                                </li>

                                <li>
                                    <a href="/Login/login.organizer" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-blue-400 hover:text-blue-500">
                                        <strong className="font-medium text-4xl text-white ">Log-In as Organizer </strong>
                                        <CIcon icon={cilGroup} size="xxl" className='text-white hover:text-blue-500' />


                                    </a>
                                </li>
                            </ul>
                       
                </div>
            </div>
        </div>
    )
}

export default page