// This Page is the onBoarding page that onboards user to the site and allows
// them to go to signup or login page depending upon their need
import Link from 'next/link';
import '@/app/globals.css'; 
import {Inter} from 'next/font/google';
const inter = Inter({subsets:['latin']})
function onBoard(){
    return (
        <div className="h-full max-w-full min-h-screen w-screen bg-prim flex flex-col lg:flex-row">
            <div className="max-w-[100vw] lg:flex-1">
                <img className='h-full w-full' src='./arya.png'/>
            </div>
            <div className='relative p-10 flex flex-col gap-4 lg:flex-1 max-w-[100vw]'>
                <div className='absolute lg:static -top-5 w-full left-0 flex justify-center'>
                    <div className='bg-[#CBCBFF] text-prim font-semibold p-1 px-6 rounded'>
                        Arya, AI Aacharya
                    </div>
                </div>
                <div className='text-white flex flex-col gap-2'>
                    <div className='text-3xl font-medium'>
                        Discover the timeless wisdom of <p className='text-ysec'>the Vedas.</p>
                    </div>
                    <div className={`text-sm ${inter.className} font-light p-1`}>
                        Sign up and <span className='text-ysec'> journey through ancient knowledge with Arya 🌟</span>
                    </div>
                </div>
                <div className="justify-center flex gap-6 p-2">
                    <div className="p-2 rounded-full border border-gray-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38822 22.954 10.125 23.8542V15.4688H7.07813V12H10.125V9.35626C10.125 6.34875 11.9165 4.68751 14.6576 4.68751C15.9705 4.68751 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80001 13.875 9.749V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12" fill="#1877F2"/>
                            <path d="M16.6711 15.4687L17.2031 12H13.875V9.74898C13.875 8.80001 14.3399 7.875 15.8306 7.875H17.3438V4.92187C17.3438 4.92187 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34874 10.125 9.35625V12H7.07812V15.4687H10.125V23.8542C10.7453 23.9514 11.3722 24.0002 12 24C12.6379 24 13.264 23.9501 13.875 23.8542V15.4687H16.6711Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="p-2 rounded-full border border-gray-300">
                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6968 11.8426C22.6978 11.0536 22.631 10.2659 22.4974 9.48828H11.5781V13.9476H17.8322C17.7042 14.6599 17.4333 15.3388 17.0359 15.9435C16.6384 16.5482 16.1227 17.0662 15.5197 17.4662V20.3609H19.2521C21.4376 18.3459 22.6968 15.366 22.6968 11.8426Z" fill="#4285F4"/>
                            <path d="M11.578 23.1575C14.7027 23.1575 17.3336 22.1315 19.2521 20.3625L15.5196 17.4679C14.4807 18.1723 13.1428 18.5743 11.578 18.5743C8.55797 18.5743 5.9946 16.5384 5.07796 13.7949H1.23291V16.778C2.19661 18.6957 3.67435 20.3078 5.50113 21.4343C7.32791 22.5608 9.43185 23.1574 11.578 23.1575V23.1575Z" fill="#34A853"/>
                            <path d="M5.07797 13.796C4.59337 12.3584 4.59337 10.8016 5.07797 9.36395V6.38086H1.23291C0.422212 7.99407 0 9.77451 0 11.58C0 13.3854 0.422212 15.1659 1.23291 16.7791L5.07797 13.796Z" fill="#FBBC04"/>
                            <path d="M11.5783 4.58395C13.2295 4.55697 14.825 5.18085 16.02 6.32073L19.3247 3.01601C17.2291 1.04778 14.453 -0.0328167 11.5783 0.000759663C9.43209 0.000857478 7.32816 0.597466 5.50137 1.72398C3.67459 2.85049 2.19686 4.46257 1.23315 6.38023L5.07821 9.36333C5.99484 6.61985 8.55821 4.58395 11.5783 4.58395V4.58395Z" fill="#EA4335"/>
                        </svg>
                    </div>
                    <div className="p-2 rounded-full border border-gray-300">
                        <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6841 19.3869C20.3211 20.2254 19.8915 20.9972 19.3938 21.7068C18.7153 22.6742 18.1597 23.3438 17.7316 23.7157C17.0679 24.326 16.3568 24.6386 15.5954 24.6564C15.0487 24.6564 14.3895 24.5008 13.6221 24.1853C12.8522 23.8712 12.1446 23.7156 11.4977 23.7156C10.8192 23.7156 10.0915 23.8712 9.31318 24.1853C8.53364 24.5008 7.90566 24.6653 7.42552 24.6815C6.69533 24.7127 5.9675 24.3912 5.24101 23.7156C4.7773 23.3112 4.19733 22.6179 3.50252 21.6357C2.75707 20.5868 2.14421 19.3706 1.66407 17.984C1.14986 16.4863 0.89209 15.0359 0.89209 13.6318C0.89209 12.0234 1.23964 10.6362 1.93576 9.47372C2.48286 8.53997 3.21069 7.8034 4.12163 7.26269C5.03255 6.72196 6.01683 6.4464 7.0768 6.42879C7.65678 6.42879 8.41734 6.60818 9.3625 6.96077C10.305 7.31454 10.9102 7.49393 11.1755 7.49393C11.3738 7.49393 12.0461 7.28416 13.1858 6.86595C14.2636 6.47812 15.1731 6.3175 15.9183 6.38078C17.9375 6.54374 19.4545 7.33971 20.4634 8.77375C18.6575 9.86794 17.7642 11.4005 17.782 13.3665C17.7982 14.8978 18.3538 16.1722 19.4456 17.184C19.9404 17.6536 20.493 18.0166 21.1078 18.2744C20.9745 18.661 20.8337 19.0314 20.6841 19.3869V19.3869ZM16.0531 1.16374C16.0531 2.364 15.6146 3.4847 14.7406 4.52201C13.6858 5.75516 12.41 6.46772 11.0265 6.35529C11.0079 6.20439 10.9986 6.0525 10.9986 5.90047C10.9986 4.74822 11.5002 3.51506 12.391 2.50681C12.8357 1.9963 13.4014 1.57183 14.0873 1.23322C14.7717 0.899659 15.4191 0.715191 16.0279 0.683594C16.0457 0.844046 16.0531 1.00452 16.0531 1.16372V1.16374Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className='text-sm flex relative'>
                    <div className='h-px top-1/2 w-full absolute bg-white'></div>
                    <p className='mx-auto z-50 bg-prim px-2 text-gray-50'>
                        OR
                    </p>
                </div>
                <div className='text-prim flex flex-col gap-2 font-medium'>
                    <Link href="/SignUp">
                        <button className='w-full bg-ysec rounded py-3'>
                            Sign up with mail
                        </button>
                    </Link>
                    <div className='text-white mx-auto py-1'>
                        Existing Account? 
                        <Link href="/SignIn">
                            <span className='text-ysec cursor-pointer'>Log in</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default onBoard;