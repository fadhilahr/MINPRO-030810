'use client'
import React, { useEffect, useState } from 'react'
import SearchFilter from './SearchFilter'
import ModalLogin from './ModalLogin';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from "react-icons/hi";



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

                <SearchFilter />

                <li>
                  <a
                    className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    href="/"
                  >
                    Create Event
                  </a>

                </li>


                <li>
                  <a
                    className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    href="/"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:text-gray-700  text-white  dark:hover:text-gray-300 font-semibold "
                    href="/Daftar"
                  >
                    Daftar
                  </a>
                </li>
              </ul>
            </nav>
          </div>


          <div className="flex gap-10">
            <ModalLogin />

          </div>
        </div>
      </div>
    </header>
  </div>


};
