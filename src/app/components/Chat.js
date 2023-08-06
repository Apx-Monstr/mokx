// Its a chat component that renders individual chats that are send by Bot to the user
// along with time
const Chat = (props) => {
    return(
        <div className="p-2 flex flex-col">
            <div className='flex gap-2'>
                {!props.recent ? <img className='h-10 w-10' src="./arya-round.png"/> : <div className="h-10 w-10"></div>}
                {props.recent}
                <div className="max-w-[70%] flex flex-col items-end">
                    <div className='rounded-lg rounded-tl-none md:text-base my-auto mt-3 bg-prim p-2.5 text-xs text-white '>
                        {props.text}
                    </div>
                    <p className='text-xs p-1 text-prim'>
                        {props.time}
                    </p>
                </div>
            </div>
        </div>
    )
}

// default value of chat prop
Chat.defaultProps={
    text:"     ",
    recent:false,
}

export default Chat;