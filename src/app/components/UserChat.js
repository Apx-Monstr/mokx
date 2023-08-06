// It is the component to render User chats individually

const Chat = (props) => {
    return(
        <div className="p-2 flex flex-col items-end">
            <div className="max-w-[70%] flex flex-col items-end">
                <div className='rounded-lg rounded-tr-none md:text-base my-auto mt-3 bg-ysec p-2.5 text-xs text-white '>
                    {props.text}
                </div>
                <p className='text-xs p-1 text-gray-500'>
                    {props.time}
                </p>
            </div>
        </div>
    )
}

Chat.defaultProps={
    text:""
}

export default Chat;