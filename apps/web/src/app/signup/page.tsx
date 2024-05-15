"use client";

import { Card } from "flowbite-react";

const page = () => {
  return (
    <div className = 'bg-slate-800'>
      
      <h1 className = 'text-7xl font-bold flex justify-center pb-10 uppercase '>Register</h1>
    <div className ='justify-center items-center gap-10 sm:flex sm:gap-4 w-full h-full'>
    <div>
       <Card
      className="max-w-sm mx-auto"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="/images/user.png"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Register as Costumers
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <a
          href="/signup/register.user"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Next
        </a>
      </div>
    </Card>
    </div>

    <div>
       <Card
      className="max-w-sm mx-auto"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="/images/organizer.png"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Register as Organizer
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <a
          href="/signup/register.organizer"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Next
        </a>
      </div>
    </Card>
    </div>

    </div>
    </div>
  )
}

export default page