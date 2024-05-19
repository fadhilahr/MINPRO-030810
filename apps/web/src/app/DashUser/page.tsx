'use client'
import React from 'react'


const page = () => {
  return (
    <div>
      <nav className="flex space-x-2 gap-10 text-4xl font-bold justify-center m-36" aria-label="Tabs" role="tablist">
        <button type="button" className="active text-black hover:text-blue-500 hover:underline" id="unstyled-tabs-item-1" data-hs-tab="#unstyled-tabs-1" aria-controls="unstyled-tabs-1" role="tab">
          General
        </button>
        <button type="button" className='active text-black hover:text-blue-500 hover:underline' id="unstyled-tabs-item-2 " data-hs-tab="#unstyled-tabs-2" aria-controls="unstyled-tabs-2" role="tab">
          Transactions
        </button>
      </nav>

      <div className="mt-3">

        <div id="unstyled-tabs-1" role="tabpanel" aria-labelledby="unstyled-tabs-item-1">
          <h1 className='flex justify-center text-3xl font-semibold bg-slate-200  rounded-lg mx-28 '>Genereal Informations</h1>
          <div className='relative'>
            <section className="bg-gray-50">
              <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
                    <div>


                      <div className="mt-4">
                        <p className="text-3xl font-bold text-rose-600 sm:text-3xl">Upcoming Events</p>

                        <p className="mt-4 text-9xl font-bold leading-relaxed text-gray-700">
                          0
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; Event(s)
                    </footer>
                  </blockquote>

                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
                    <div>


                      <div className="mt-4">
                        <p className="text-3xl font-bold text-rose-600 sm:text-3xl">Total Transactions</p>

                        <p className="mt-4 text-9xl font-bold leading-relaxed text-gray-700">
                          4
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; Transaction(s)
                    </footer>
                  </blockquote>

                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
                    <div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Your Points</p>

                        <p className="mt-4 text-7xl font-bold leading-relaxed text-gray-700">
                          50.000
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 flex ">
                      &mdash; 10.000pts will expire soon. <p className='underline hover:underline hover:text-blue-500 hover:cursor-pointer'>details</p>
                    </footer>
                  </blockquote>

                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
                    <div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Your Referral Code</p>

                        <p className="mt-4 text-7xl font-bold leading-relaxed text-gray-700">
                          xxxxxxx
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 flex ">
                      &mdash; Share yput referral and get the pointer
                    </footer>
                  </blockquote>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div id="unstyled-tabs-2" className="hidden" role="tabpanel" aria-labelledby="unstyled-tabs-item-2">
        <h1 className='flex justify-center text-3xl font-semibold bg-slate-200  rounded-lg mx-28 '>Transaction History</h1>

        <div className='relative'>
        <div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mx-32">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>


    </tbody>
  </table>
</div>

        </div>
      </div>

    </div>
  )
}

export default page