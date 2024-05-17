import React from 'react'

export default function waitingVerification() {
  return (
      <div className="flex h-screen flex-col bg-white">
      <img
        src=
        "https://perisai.sdsi.co.id/wp-content/uploads/sites/3/2023/09/JMO-web.png"
        alt=""
        className="h-64 w-full object-cover"
      />
    
      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-4 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Verifikasi Melalui Email Anda
          </h1>
    
          <p className="mt-4 text-gray-500">
            
          </p>
    
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Verifikasi
          </a>
        </div>
      </div>
    </div>
  )
} 