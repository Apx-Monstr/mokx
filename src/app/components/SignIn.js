function SignIn(){
    return (
        <div className="h-full min-h-screen w-screen relative">
            <div className="absolute">
                Hii
            </div>
            <div>
                <div>
                    Log in to Mokx
                    <p>
                        Welcome back! Sign in using your social account or email to continue with us 
                    </p>
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
                <div>
                    Hello
                </div>
            </div>
            <div className="absolute bottom-0 w-full p-4 px-10">
                <div className="flex flex-col gap-4">
                    <button className='w-full bg-ysec rounded py-3'>
                        Sign up with mail
                    </button>
                    <button className='w-full bg-ysec rounded py-3'>
                        Sign up with mail
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;