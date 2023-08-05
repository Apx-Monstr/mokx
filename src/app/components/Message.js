function Message(){
    const chats = [
        {
            message:`Hello! how are you?`,
            byUser:true,
            time:"09:25",
        },
        {
            message:`Hello! Nazrul How are you?`,
            byUser:false,
            time:"09:25",
        },
        {
            message:`You did your job well`,
            byUser:true,
            time:"09:25",
        },
        {
            message:`Have a great working week`,
            byUser:false,
            time:"09:25",
        },
        {
            message:`Hope you like it`,
            byUser:false,
            time:"09:25",
        },
    ]
    return (
        <div className="w-full">
            <div className="max-w-screen-lg w-full mx-auto bg-red-500">
                Hello
            </div>
            <div className="fixed bottom-0 w-full">
                <div className="max-w-screen-lg mx-auto">
                    Message Box
                </div>
            </div>
        </div>
    )
}

export default Message;