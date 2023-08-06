// It is the main components that gets loaded when root url is hit, that is the website
// It contains the pray hand and the words "Back to Vedas 🕉️"
import Link from 'next/link';
export default function pray(){
    return (
        <Link href="/OnBoard">
            <div className = "cursor-pointer h-screen w-screen bg-white flex items-center">
                <div className="w-full flex flex-col items-center">
                    <img className="h-48 w-48" src="./mokxLogo.png"/>
                </div>
                <div className="font-bold w-full absolute bottom-16">
                    <div className=" flex justify-center text-prim text-xl">
                        Back to Vedas 🕉️
                    </div>
                </div>
            </div>
        </Link>
    )
}