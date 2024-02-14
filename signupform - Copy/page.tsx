import * as Raect from "react";
import Link from "next/link";
import Image from "next/image";
import pictu from "../pictu.png";

export default async function Signup() {

    return (

        <div className='relative rounded-lg max-w-lg  mx-auto bg-black-10 px-4 pt-1 pb-4 border border-black-20 '>
            <div className="flex min-h-full flex-col justify-center">
                <div className="mx-auto w-full max-w-md">
                    <Image src={pictu} width='200' height='40' className="mx-auto w-20 h-auto" alt='' />
                    <h2 className="text-center text-black-100 mt-6 text-3xl font-bold tracking-tight">
                        Sign up for your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-black-75">
                        Start building your account Demistory on a solid foundation


                    </p>


                </div>
                <div className="mt-8 mx-auto w-full max-w-md">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-black-100">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    required
                                    className="block w-full appearance-none rounded-md text-black-2 border border-black-75 px-3 py-2 focus:outline-none focus:ring-0 focue:border-purple focus:drop-shadow-input/18"
                                />


                            </div>
                        </div>
                        <div>
                            <label htmlFor="phonenumber" className="block text-sm font-medium text-black-100">
                                Phonenumber
                            </label>
                            <div className="mt-1">
                                <input
                                    id="phonenumber"
                                    name="phonenumber"
                                    autoComplete="phonenumber"
                                    required
                                    className="block w-full appearance-none rounded-md text-black-2 border border-black-75 px-3 py-2 focus:outline-none focus:ring-0 focue:border-purple focus:drop-shadow-input/18"
                                />


                            </div>
                        </div>
                        <div>
                            <label htmlFor="roomnumber" className="block text-sm font-medium text-black-100">
                                Roomnumber
                            </label>
                            <div className="mt-1">
                                <input
                                    id="roomnumber"
                                    name="roomnumber"
                                    autoComplete="roomnumber"
                                    required
                                    className="block w-full appearance-none rounded-md text-black-2 border border-black-75 px-3 py-2 focus:outline-none focus:ring-0 focue:border-purple focus:drop-shadow-input/18"
                                />


                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-black-100">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    autoComplete="password"
                                    required
                                    className="block w-full appearance-none rounded-md text-black-2 border border-black-75 px-3 py-2 focus:outline-none focus:ring-0 focue:border-purple focus:drop-shadow-input/18"
                                />


                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-grey-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-black-100">
                                    Remember me
                                </label>

                            </div>

                        </div>
                        <div>
                            <button className="disabled:opacity-40 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-black-10 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Sign up

                            </button>

                        </div>
                        <div className="mt-6">
                            <span className="bg-black-10 px-2 text-black-100">
                                Already have an account? {' '}
                                <Link href='/loginform' className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Click here
                                </Link>

                            </span>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )

}