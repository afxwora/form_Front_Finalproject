import * as Raect from "react";
import Link from "next/link";
import Image from "next/image";
import pictu from "../pictu.png";
import { useState } from "react";

//interface ApiResponse {
    //message: string;
    //data?: any;
  //}
  
  //export default function Signin() {
    //const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  
    // สร้างฟังก์ชันสำหรับเรียก API
    //const testAPI = async () => {
     // try {
        // เรียก API ด้วย fetch
       // const response = await fetch("//Link");
        //const data: ApiResponse = await response.json();
        // แสดงผลลัพธ์ใน console
       // console.log(data);
        // เก็บข้อมูลลง state เพื่อแสดงผลใน UI
        //setApiResponse(data);
      //} catch (error) {
        //console.error("Error fetching data:", error);
      //}
    //};

export default async function Signin() {

    return (
        <div className='relative rounded-lg max-w-lg w-100 m-auto bg-black-10 px-4 pt-5 pb-4 border border-black-20 shadow-[0_2px_4px_rgba(57, 62, 86, 0.5)]'>
            <div className="flex min-h-full flex-col justify-center">
                <div className="mx-auto w-full max-w-md">
                <Image src={pictu} width='200' height='40'  className="mx-auto w-40  h-auto" alt='' />
                    <h2 className="text-center text-black-100 mt-6 text-3xl font-bold tracking-tight">
                        Sign in to account
                    </h2>
                    <p className="mt-2 text-center text-sm text-black-100">
                        Or{" "}
                        <Link href="/signupform" className="font-medium text-purple hover:text-indigo-500">
                            Click here to Register now
                        </Link>


                    </p>


                </div>
                <div className="mt-8 mx-auto w-full max-w-md">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-black-100">
                                Username
                            </label>
                            <div className="mt-1">
                                <input
                                    id="username"
                                    name="username"
                                    autoComplete="username"
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
                            <button className="disabled:opacity-40 flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r py-2 px-4 from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." onClick={testAPI}>
                                Sign in

                            </button>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )

}