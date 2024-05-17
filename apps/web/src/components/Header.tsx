'use client'
import React, { useEffect, useState } from 'react'
import SearchFilter from './SearchFilter'
import ModalLogin from './ModalLogin';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks';
import { setUser } from '@/lib/features/account/account';
import { deleteToken } from '@/app/action';
import Cookies from 'js-cookie'
import { Avatar, Dropdown } from "flowbite-react";



export const Header = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [searchEffect, setSearchEffect] = useState("flex")
  const account = useAppSelector((state) => state.account.value)
  // console.log(account);
  

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
        handleLogout()
        throw ("Session expired, please sign in again.")
      }
    } catch (error) {
      alert(error)
    }
  }

  const handleLogout = () => {
    deleteToken('token', '/')
    Cookies.remove('token')
    dispatch(setUser(null))
  }

  useEffect(() => {
    const token = Cookies.get("token")
    if (token !== undefined) {
      getUser(token)
    }
  }, [])

  const checkOrganizer = (key: string) => {
    if (account?.accountType !== "organizer") {
      alert("please login as organizer")
    } else {
      router.push(key)
    }
  }

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Attach the event listener
    window.addEventListener("scroll", handleScroll);
    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }},[]);

  return <div>
    <div className ={`fixed top-0 left-0 w-full z-10 bg-transparent ${isScrolled ? "bg-slate-900 shadow-lg" : "bg-transparent"}`}>
      <header>
        <div className=" gap-10 w-full  px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 gap-6 w-full items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a  href="/">
                <img src='/images/logo1.png' alt='logo' className='w-96 max-md:w-20' />
              </a>
            </div>

            <div className="hidden md:block grow min-w-6">
              <nav aria-label="Global" className="grow bg-transparent">
                <ul className="flex items-center min-w-10 grow gap-6 text-sm">

                  <SearchFilter />

                  <li>
                    <a
                      className="hover:text-gray-700  text-white  dark:hover:text-gray-300 font-semibold"
                      href="/"
                    >
                      Create Event
                    </a>

                  </li>


                  <li>
                    <a
                      className="hover:text-gray-700  text-white  dark:hover:text-gray-300 font-semibold"
                      href="/"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className={`hover:text-gray-700  text-white  dark:hover:text-gray-300 font-semibold ${account?.accountType? "hidden" : "flex" }`}
                      href="/signup"
                    >
                      Daftar
                    </a>
                  </li>
                </ul>
              </nav>
            </div>


            <div className ={`flex gap-10 ${account?.accountType? "hidden" : "flex" }`}>
              <a href ='/Login' className ='' >
                <button className ='hover:text-gray-700  text-white  dark:hover:text-gray-300 font-semibold'>Login </button>
              </a>
            </div>
          <div className={`${account?.accountType? "flex" : "hidden"}`} >
            <Dropdown 
              label={<Avatar alt="User settings" img="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" rounded />}
              arrowIcon={false}
              inline
            >
              <Dropdown.Header >
                <span className="block text-sm">{}</span>
                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
              </Dropdown.Header>
              <a href ='./Dashboard/DashUser'><Dropdown.Item>Dashboard</Dropdown.Item></a>
              <a href ='/Profile'>
              <Dropdown.Item>Profile</Dropdown.Item></a>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item onClick={() => handleLogout()} className={`${account?.accountType == null ? "hidden" : "block"} hover:bg-red-500  text-red-500 hover:text-white font-bold rounded-xl`}>Sign out</Dropdown.Item>
            </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>


};
