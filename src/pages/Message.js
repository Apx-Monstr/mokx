import Chat from '@/app/components/Chat';
import UserChat from '@/app/components/UserChat'
import '@/app/globals.css'; 
import Link from 'next/link';
function Message(){
    // It is a static chat that is rendered conoditionally based on the properties of
    // individual chats and uses Chat and User chat components to render chats respectively
    // Mosty this data is dynamic and is meant to be fetched from a database through APIs
    // but as content in the UI is static so this approach works perfectly
    const chats = [
        {
            msg:"Hello! How are You?",
            byUser:true,
            time:"09:25 AM",
            recent:false
        },
        {
            msg:"Hello! Nazrul how are you",
            byUser:false,
            time:"09:25 AM",
            recent:false
        },
        {
            msg:"You did your job well!",
            byUser:true,
            time:"09:25 AM",
            recent:false
        },
        {
            msg:"Have a great working week!!",
            byUser:false,
            time:"",
            recent:false
        },
        {
            msg:"Hope you like it",
            byUser:false,
            time:"09:25 AM",
            recent:true
        },
        {
            msg:"Hello! How are you?",
            byUser:true,
            time:"",
            recent:false
        },
        {
            msg:"अपनेपन यथासंभव धीर-धीरे अपने समय  ",
            byUser:false,
            time:"09:25 AM",
            recent:false
        },
        {
            msg:"You did your job well!",
            byUser:true,
            time:"",
            recent:false
        },
        {
            msg:"हमारे लेकर वर्गाकार करता। होना त्याग ",
            byUser:false,
            time:"",
            recent:false
        },
        {
            msg:"क्योंकि विकास करता ",
            byUser:false,
            time:"09:25 AM",
            recent:true
        },
    ]
    return (
        <div className="w-full">
            <div className='sticky max-w-screen-lg mx-auto top-0 w-full bg-white'>
                <div className='p-2 justify-between items-center flex'>
                    <div className='flex items-center'>
                        <Link href="/OnBoard">
                            <div className='p-2 pr-3'>
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1L1 5M1 5L5 9M1 5L13 5" stroke="#69235B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </Link>
                        <div className='flex gap-4 items-center'>
                            <img className='h-10 w-10' src = "./arya-round.png"/>
                            <div className='text-prim font-bold text-xl'>
                                Arya
                                <p className='text-xs md:text-base font-normal'>Vedic AI Bot</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-ysec p-2 font-semibold'>
                        A/क
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg w-full mx-auto pb-12 md:text-xl">
                <div className='bg-white w-full h-full pb-4'>
                    <div className=" p-2 flex gap-2">
                        <div>
                            <img src="./arya-round.png"/>
                        </div>
                        <div className="rounded-lg rounded-tl-none my-auto mt-2 bg-prim p-2.5 text-xs md:text-base text-white max-w-[70%]">
                        🙏 Namaste!  I’m Arya, your AI Vedic help.  I'm here to provide insights from Vedas for daily life concerns. 

                            Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I’m here to assist you. 
                        </div>
                    </div>
                    <div className='flex flex-col items-center p-4 gap-4'>
                        <div className='flex gap-2 text-prim font-medium'>
                            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.22222 21L8.44444 13.125L0 12.075L12.6667 0H14.7778L10.5556 7.875L19 8.925L6.33333 21H4.22222Z" fill="#69235B"/>
                            </svg>
                            You can ask Queries Like: 
                        </div>
                        <div className='flex flex-col gap-4 font-medium text-xs md:text-base max-w-[80%]'>
                            <div className = "p-4 rounded-3xl bg-ysec text-prim">
                                What is the mantra in Rigveda 10.2.3?
                            </div>
                            <div className = "p-4 rounded-3xl bg-ysec text-prim">
                                What are the prescribed Vedic remedies for snake bites?
                            </div>
                            <div className = "p-4 rounded-3xl bg-ysec text-prim">
                                Can you tell me the significance of the Gayatri Mantra?
                            </div>
                        </div>
                        <div className='flex items-center gap-2 text-xs md:text-base font-medium text-prim'>
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 1L1 13H16L8.5 1Z" stroke="#69235B" stroke-linejoin="round"/>
                                <path d="M8.5 10.4737V10.7894M8.5 5.42102L8.50316 8.57892" stroke="#69235B" stroke-linecap="round"/>
                            </svg>
                            Limitation: May struggle with complex queries.
                        </div>
                    </div>
                    <div className="p-2">
                        <div className='flex gap-2'>
                            <img className='h-10 w-10' src="./arya-round.png"/>
                            <div className="max-w-[70%] flex flex-col items-end">
                                <div className='rounded-lg rounded-tl-none my-auto mt-3 bg-prim p-2.5 text-xs md:text-base text-white '>
                                    Let your curiosity guide you; wishing you blessings and enlightenment 🕉️
                                </div>
                                <p className='text-xs p-1 text-prim'>
                                    09:25 AM
                                </p>
                            </div>
                        </div>
                    </div>
                    {chats.map((chat, index) => (

                        <div key={index}>
                            {chat.byUser ? <UserChat text={chat.msg} time={chat.time}/> : <Chat text={chat.msg} time = {chat.time} recent = {chat.recent}/>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="fixed bottom-2 w-full">
                <div className="max-w-screen-lg mx-auto px-2">
                    <div className='flex items-center gap-3 p-2 px-3 rounded-full bg-white'>
                        <input className='flex-1 focus:outline-none text-prim text-xs md:text-base p-2' placeholder='Write Your Message'/>
                        <svg className='cursor-pointer' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0205 5.50867L6.46046 1.22867C0.710459 -1.65133 -1.64954 0.70867 1.23046 6.45867L2.10046 8.19867C2.35046 8.70867 2.35046 9.29867 2.10046 9.80867L1.23046 11.5387C-1.64954 17.2887 0.700459 19.6487 6.46046 16.7687L15.0205 12.4887C18.8605 10.5687 18.8605 7.42867 15.0205 5.50867ZM11.7905 9.74867H6.39046C5.98046 9.74867 5.64046 9.40867 5.64046 8.99867C5.64046 8.58867 5.98046 8.24867 6.39046 8.24867H11.7905C12.2005 8.24867 12.5405 8.58867 12.5405 8.99867C12.5405 9.40867 12.2005 9.74867 11.7905 9.74867Z" fill="#69235B"/>
                        </svg>
                        <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="#CECECE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.34998 9.65002V11.35C4.34998 15.57 7.77998 19 12 19C16.22 19 19.65 15.57 19.65 11.35V9.65002" stroke="#CECECE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.61 6.43C11.51 6.1 12.49 6.1 13.39 6.43" stroke="#CECECE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.2 8.55001C11.73 8.41001 12.28 8.41001 12.81 8.55001" stroke="#CECECE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 19V22" stroke="#CECECE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;