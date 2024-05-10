'use client'
import React, { useEffect, useState } from 'react'
import SearchFilter from './SearchFilter'
import ModalLogin from './ModalLogin';



export const Header = () => {
 
  return <div>

    <header className="bg-black dark:bg-gray-900">
      <div className=" gap-10 w-full  px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 gap-6 w-full items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img src='/images/logo1.png' alt='logo' className='w-96 max-md:w-20' />
            </a>
          </div>
          
          <div className="hidden md:block grow min-w-6">
            <nav aria-label="Global" className="grow">
              <ul className="flex items-center min-w-10 grow gap-6 text-sm">

                <SearchFilter/>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Create Event
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-10">
            <ModalLogin/>


            {/* <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  </div>


};
