
'use client'
import { setUser } from '@/lib/features/account/account'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import Cookies from 'js-cookie'
import React, { useRef, useState } from 'react'

export default function page() {
  const imageRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<File | null>(null)
  const dispatch = useAppDispatch()
  const account = useAppSelector((state) => state.account.value)


  const getUser = async (token: any) => {
    try {
      const response = await fetch('http://localhost:8000/api/accounts/accountType', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      })
      const data = await response.json()
      // console.log(data);
      dispatch(setUser(data.userData))
      if (data.message.message == "jwt expired") {
        throw ("Session expired, please sign in again.")
      }
    } catch (error) {
      alert(error)
    }
  }

  const handleImageSubmit = async () => {
    try {
      const formData = new FormData()
      if (image) {
        formData.append("file", image)
      }
      const token = Cookies.get("token")
      const res = await fetch('http://localhost:8000/api/accounts/images', {
        method: "PATCH",
        body: formData,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      if (res.ok) {
        getUser(token)
      } else {
        throw res
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = () => {
    if (imageRef.current && imageRef.current.files) {
      const data = imageRef.current?.files[0]
      setImage(data)
    }
  }
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-slate-900 w-full">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <img className="inline-block rounded-full" src={account?.image} />
          </div>
          <div>
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">


                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 bg-white">
                  <dt className=" text-gray-900 text-3xl font-semibold">Name</dt>
                  <dd className="text-gray-700 sm:col-span-2 text-3xl font-semibold ">{account?.name}</dd>
                  <dt></dt>
                  <dd> <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Change</a></dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 bg-white">
                  <dt className="text-3xl font-semibold text-gray-900">Email</dt>
                  <dd className="text-gray-700 sm:col-span-2 text-3xl font-semibold">{account?.email}</dd>
                  <dt></dt>
                  <dd> <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Change</a></dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 bg-white">
                  <dt className="text-3xl font-semibold text-gray-900">Referral</dt>
                  <dd className="text-gray-700 sm:col-span-2 text-3xl font-semibold">{account?.referral}</dd>
                  <dt></dt>
                  <dd> <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Change</a></dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 bg-white">
                  <dt className="text-3xl font-semibold text-gray-900">Point</dt>
                  <dd className="text-gray-700 sm:col-span-2 text-3xl font-semibold">{new Intl.NumberFormat('en-DE').format(+account?.sumPoint!)}</dd>
                  <dt></dt>
                  <dd> <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Change</a></dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 bg-white">
                  <dt className="text-3xl font-semibold text-gray-900">Profile Picture</dt>
                  <dd className="text-gray-700 sm:col-span-2 text-3xl font-semibold ">{account?.image}</dd>
                  <dt></dt>
                  <dd>
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input onChange={handleChange} type="file" ref={imageRef} className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:text-neutral-500 dark:file:bg-blue-500 dark:hover:file:bg-blue-400 " />
                    </label>
                  </dd>
                </div>
                <div>
                  <div className=" font-medium text-gray-900"></div>
                  <button onClick={handleImageSubmit} type="button" className="py-3 px-4 inline-flex gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none">
                    SAVE
                  </button>
                </div>
              </dl>
            </div>
            {account?.accountType}
          </div>
          </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src={account?.image}
            className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      className="absolute inset-0 h-full w-full object-cover"/>
  </div>

    </div>
      
      
      )
}
