import React from 'react'

import { cilGroup, cilUser } from '@coreui/icons';
import CIcon from '@coreui/icons-react';


export function ModalLogin() {
 
  return (
    <div>
      <div className="flex items-center gap-10 w-full rounded-lg">
        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal">
          Sign In
        </button>

        <div id="hs-vertically-centered-modal" className="hs-overlay bg-current hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="w-full flex flex-col bg-slate-700 border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                <h3 className="font-bold text-white text-4xl">
                  Login
                </h3>
                <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#hs-vertically-centered-modal">
                  <span className="sr-only">Close</span>
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="sm:flex sm:gap-4 flex w-full h-full">
                <article className="rounded-xl border border-gray-700 bg-gray-800 p-4 w-full ">
                  <div className="flex items-center gap-4 w-full">
                    <img
                      alt=""
                      src="./images/logo1.png"
                      className="w-52 mx-auto"
                    />


                  </div>

                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="/Login/login.user" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                        <strong className="font-medium text-2xl text-white">Log-In as Costumers </strong>
                        <CIcon icon={cilUser} size="xl" />
                      </a>
                    </li>

                    <li>
                      <a href="/Login/login.organizer" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                        <strong className="font-medium text-2xl text-white">Log-In as Organizer </strong>
                        <CIcon icon={cilGroup} size="xl" />


                      </a>
                    </li>
                  </ul>
                </article>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalLogin