function Alert({ message, onAccept }) {
    return <div className="w-full h-full fixed top-0 flex justify-center items-center">
        <div className="bg-black w-[50%] border-2 border-greenyellow flex flex-col">
            <p>{message}</p>

            <button className="button" onClick={onAccept}>Accept</button>
        </div>
    </div>
}

export default Alert