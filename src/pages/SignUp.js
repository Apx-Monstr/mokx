
import Link from 'next/link';
import '@/app/globals.css'; 
function SignUp(){
    return (
        <div className="h-full pb-14 min-h-screen w-screen relative flex items-center">
            <Link href="/OnBoard">
                <div className="absolute p-4 bg-white top-4 left-4 cursor-pointer">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L1 5M1 5L5 9M1 5L13 5" stroke="#000E08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </Link>
            <div className="flex flex-col items-center p-4 mx-auto gap-4 md:gap-6">
                <img src="mokx-logo.png"/>
                <div className="flex flex-col items-center gap-4">
                    <div className="text-xl font-bold text-prim relative z-20">
                        Sign Up with Email
                        <div className="absolute bg-ysec h-2 w-14 -right-1 bottom-0.5 -z-10">

                        </div>
                    </div>
                    <div className="text-prim text-[14px] font-normal text-center max-w-[80%]">
                        Welcome back! Sign in using your social account or email to continue with us 
                    </div>
                </div>
                <div className='text-sm relative w-full flex my-2'>
                    <div className='h-px top-1/2 left-1/4 w-1/2 absolute bg-gray-500'></div>
                    <div className='mx-auto z-50 bg-white px-2 text-prim'>
                        OR
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-[320px]">
                    <div className="border-b-gray-500 border-b">
                        <div className="text-xs font-semibold text-prim">
                            Your Name
                        </div>
                        <input className="focus:outline-none w-full p-2" type="text"/>
                    </div>
                    <div className="border-b-gray-500 border-b">
                        <div className="text-xs font-semibold text-prim">
                            Your Email
                        </div>
                        <input className="focus:outline-none w-full p-2" type="email"/>
                    </div>
                    <div className="border-b-gray-500 border-b">
                        <div className="text-xs font-semibold text-prim">
                            password
                        </div>
                        <input className="focus:outline-none w-full p-2" type="password"/>
                    </div>
                    <div className="border-b-gray-500 border-b">
                        <div className="text-xs font-semibold text-prim">
                            Confirm Password
                        </div>
                        <input className="focus:outline-none w-full p-2" type="password"/>
                    </div>
                </div>
            </div>
            <div className=" absolute bottom-0 w-full p-4 px-10">
                <div className="flex flex-col gap-4 max-w-md mx-auto">
                    <Link href="/Message">
                        <button className='w-full bg-ysec rounded py-3 text-prim'>
                            Create an account
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;