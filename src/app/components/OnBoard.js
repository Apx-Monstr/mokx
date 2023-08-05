import arya from '@/assets/arya.svg';
import {Inter} from 'next/font/google';
const inter = Inter({subsets:['latin']})
function onBoard(){
    return (
        <div className="h-full min-h-screen w-screen bg-prim">
            <div className="bg-blue-600 aspect-[13/10]">
                Hello from Arya
            </div>
            <div className='relative p-10 flex flex-col gap-4'>
                <div className='absolute -top-5 w-full left-0 flex justify-center'>
                    <div className='bg-red-500 p-1 px-6 rounded'>
                        Arya, AI Aacharya
                    </div>
                </div>
                <div className='text-white flex flex-col gap-2'>
                    <div className='text-3xl font-medium'>
                        Discover the timeless wisdom of <p className='text-ysec'>the Vedas.</p>
                    </div>
                    <div className={`text-sm ${inter.className} font-light`}>
                        Sign up and <span className='text-ysec'> journey through ancient knowledge with Arya 🌟</span>
                    </div>
                </div>
                <div>
                    Icons
                </div>
                <div className='text-sm flex relative'>
                    <div className='h-px top-1/2 w-full absolute bg-white'></div>
                    <p className='mx-auto z-50 bg-prim px-2 text-gray-50'>
                        OR
                    </p>
                </div>
                <div className='text-prim flex flex-col gap-2 font-medium'>
                    <button className='w-full bg-ysec rounded py-3'>
                        Sign up with mail
                    </button>
                    <div className='text-white mx-auto py-1'>
                        Existing Account? <span className='text-ysec'>Log in</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default onBoard;