'use client'

import { useRouter } from 'next/navigation'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'

const registerSchema = yup.object().shape({
  name: yup.string().required('Name can be not empty'),
  email: yup.string().email('invalid email').required('email can not be empty'),
  password: yup.string().min(6, 'password must contains at least 6 characters').required('password can not be empty'),
})
export default function Page() {

  const router = useRouter()
  const handeLogin = async (dataset: { email: string, password: string }) => {
    try {
      console.log(dataset);
      
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(dataset)
      })
      const data = await response.json()
      if (data.status !== "ok") {
        throw (data.message)
      } else {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }
  return (

    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values: { email: string, password: string }, action: { resetForm: () => void }) => {
          console.log(values);
          
          handeLogin(values)
          action.resetForm()
        }}>
        {() => {


          return (
            <div className=" bg-blue-900 ">
              <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                  <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl"></h1>
                    <img src='/images/logo1.png' alt='logo' className='w-96 max-md:w-20 mx-auto' />

                    <p className="mt-4 font-extrabold uppercase text-black text-2xl ">
                      Daftarkan kegiatan event dan film karyamu disini!!
                    </p>
                  </div>
                  <div >
                    <Form className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
                      <div>
                        <div className='relative'>
                          <label htmlFor="email" className="sr-only">Email</label>
                          <Field
                            type="email"
                            placeholder="Your email"
                            name="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          />
                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
                          </span>
                        </div>
                        <ErrorMessage component="div" name="email" className="text-xmetal text-sm text-[0.7rem] fixed " />
                      </div>
                      <div>
                        <div className='relative'>
                          <label htmlFor="password" className="sr-only">Password</label>
                          <Field
                            type="password"
                            placeholder="User password"
                            name="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          />
                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </span>
                        <ErrorMessage component="div" name="password" className="text-xmetal text-sm text-[0.7rem] fixed" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        No account?
                        <a className="underline" href="/Daftar/register.user">Sign up</a>
                      </p>
                      <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">Login</button>
                      </div>
                    </Form>

                  </div>
                  
                </div>
                  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                      alt=""
                      src="./public/images/bg-login.jpg"
                      className="absolute inset-0 h-full w-full object-cover rounded-lg"
                    />
                  </div>
              </section>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

