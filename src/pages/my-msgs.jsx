import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { MsgsList } from "../cmps/msg-list"


export const MyMsgs = () => {
    const { user } = useSelector((storeState) => storeState.userModule)
    const [msgs, setMsgs] = useState(user.msgs)

    useEffect(() => {
        console.log('here');
        setMsgs(user.msgs)
    }, [user.msgs])


    return <div className="my-msgs">
        <p className="my-msgs-header">My messages:</p>
        <MsgsList msgs={msgs} />
    </div>
}