"use client"
import { useAppSelector } from '@/lib/features/hooks'
import React from 'react'

export default function page () {
    const account = useAppSelector((state) => state.account.value)
    console.log(account);
    
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-slate-900">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <img className="inline-block size-[62px] rounded-full" src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Image Description"></img>
      <h1 className="text-2xl font-bold sm:text-3xl text-white">Get started today!</h1>

      
    </div>
    <div>
      {account?.accountType}
    </div>
    
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
      <div className="max-w-sm">
        <form>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input type="file" className="block w-full 
        text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      "/>
          </label>
        </form>
      </div>
    </div>
  )
}

