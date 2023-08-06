import Link from 'next/link';
import '@/app/globals.css'; 
function SignIn(){
    return (
        <div className="h-full min-h-screen w-screen relative flex items-center">
            <div className="absolute p-4 bg-white top-4 left-4 cursor-pointer">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L1 5M1 5L5 9M1 5L13 5" stroke="#000E08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="flex flex-col items-center p-4 mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-xl font-bold text-prim relative z-20">
                        Log in to Mokx
                        <div className="absolute bg-ysec h-2 w-14 -left-1 bottom-0.5 -z-10">

                        </div>
                    </div>
                    <div className="text-prim text-[14px] font-normal text-center max-w-[80%]">
                        Welcome back! Sign in using your social account or email to continue with us 
                    </div>
                </div>
                <div className=" flex gap-6 p-4">
                    <div className="p-2 rounded-full border-2 cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38822 22.954 10.125 23.8542V15.4688H7.07813V12H10.125V9.35626C10.125 6.34875 11.9165 4.68751 14.6576 4.68751C15.9705 4.68751 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80001 13.875 9.749V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12" fill="#1877F2"/>
                            <path d="M16.6711 15.4687L17.2031 12H13.875V9.74898C13.875 8.80001 14.3399 7.875 15.8306 7.875H17.3438V4.92187C17.3438 4.92187 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34874 10.125 9.35625V12H7.07812V15.4687H10.125V23.8542C10.7453 23.9514 11.3722 24.0002 12 24C12.6379 24 13.264 23.9501 13.875 23.8542V15.4687H16.6711Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="p-2 rounded-full border-2 cursor-pointer">
                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6968 11.8426C22.6978 11.0536 22.631 10.2659 22.4974 9.48828H11.5781V13.9476H17.8322C17.7042 14.6599 17.4333 15.3388 17.0359 15.9435C16.6384 16.5482 16.1227 17.0662 15.5197 17.4662V20.3609H19.2521C21.4376 18.3459 22.6968 15.366 22.6968 11.8426Z" fill="#4285F4"/>
                            <path d="M11.578 23.1575C14.7027 23.1575 17.3336 22.1315 19.2521 20.3625L15.5196 17.4679C14.4807 18.1723 13.1428 18.5743 11.578 18.5743C8.55797 18.5743 5.9946 16.5384 5.07796 13.7949H1.23291V16.778C2.19661 18.6957 3.67435 20.3078 5.50113 21.4343C7.32791 22.5608 9.43185 23.1574 11.578 23.1575V23.1575Z" fill="#34A853"/>
                            <path d="M5.07797 13.796C4.59337 12.3584 4.59337 10.8016 5.07797 9.36395V6.38086H1.23291C0.422212 7.99407 0 9.77451 0 11.58C0 13.3854 0.422212 15.1659 1.23291 16.7791L5.07797 13.796Z" fill="#FBBC04"/>
                            <path d="M11.5783 4.58395C13.2295 4.55697 14.825 5.18085 16.02 6.32073L19.3247 3.01601C17.2291 1.04778 14.453 -0.0328167 11.5783 0.000759663C9.43209 0.000857478 7.32816 0.597466 5.50137 1.72398C3.67459 2.85049 2.19686 4.46257 1.23315 6.38023L5.07821 9.36333C5.99484 6.61985 8.55821 4.58395 11.5783 4.58395V4.58395Z" fill="#EA4335"/>
                        </svg>
                    </div>
                    <div className="p-2 rounded-full border-2 cursor-pointer">
                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.792 18.7033C19.4291 19.5418 18.9994 20.3136 18.5017 21.0232C17.8232 21.9906 17.2676 22.6602 16.8395 23.0321C16.1758 23.6424 15.4647 23.955 14.7033 23.9728C14.1566 23.9728 13.4974 23.8172 12.73 23.5017C11.9601 23.1876 11.2526 23.0321 10.6056 23.0321C9.92711 23.0321 9.19941 23.1876 8.42109 23.5017C7.64155 23.8172 7.01357 23.9817 6.53343 23.998C5.80324 24.0291 5.07541 23.7076 4.34892 23.0321C3.88521 22.6276 3.30524 21.9343 2.61043 20.9521C1.86498 19.9032 1.25212 18.687 0.771976 17.3004C0.25777 15.8027 0 14.3523 0 12.9482C0 11.3398 0.347548 9.9526 1.04368 8.79012C1.59077 7.85638 2.3186 7.1198 3.22954 6.57909C4.14046 6.03836 5.12474 5.7628 6.18471 5.7452C6.76469 5.7452 7.52525 5.92459 8.47041 6.27717C9.41291 6.63095 10.0181 6.81034 10.2834 6.81034C10.4818 6.81034 11.154 6.60056 12.2937 6.18236C13.3715 5.79452 14.281 5.63391 15.0262 5.69718C17.0454 5.86014 18.5624 6.65611 19.5713 8.09015C17.7654 9.18435 16.8721 10.7169 16.8899 12.6829C16.9062 14.2143 17.4617 15.4886 18.5535 16.5004C19.0483 16.97 19.6009 17.333 20.2157 17.5908C20.0824 17.9774 19.9416 18.3478 19.792 18.7033V18.7033ZM15.161 0.480143C15.161 1.68041 14.7225 2.80111 13.8485 3.83841C12.7937 5.07157 11.5179 5.78413 10.1344 5.67169C10.1158 5.5208 10.1065 5.36891 10.1065 5.21688C10.1065 4.06463 10.6081 2.83147 11.4989 1.82321C11.9436 1.31271 12.5093 0.888237 13.1952 0.549624C13.8796 0.216065 14.527 0.0315971 15.1358 0C15.1536 0.160452 15.161 0.320924 15.161 0.480122V0.480143Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className='text-sm relative w-full flex my-2'>
                    <div className='h-px top-1/2 left-1/4 w-1/2 absolute bg-gray-500'></div>
                    <div className='mx-auto z-50 bg-white px-2 text-prim'>
                        OR
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[320px]">
                    <div className="border-b-gray-500 border-b">
                        <div className="text-xs font-semibold text-prim">
                            Your Email
                        </div>
                        <input className="focus:outline-none w-full p-2" type="email"/>
                    </div>
                    <div className="border-b-gray-500 border-b">
                        <div className="text-xs font-semibold text-prim">
                            Password
                        </div>
                        <input className="focus:outline-none w-full p-2" type="password"/>
                    </div>
                </div>
            </div>
            <div className=" absolute bottom-0 w-full p-4 px-10">
                <div className="flex flex-col gap-4 max-w-md mx-auto">
                    <Link href="/Message">
                        <button className='w-full bg-ysec rounded py-3 text-prim'>
                            Login
                        </button>
                    </Link>
                    <Link href="/Message">
                        <button className='w-full text-ysec rounded py-3'>
                            Forgot Password?
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn;