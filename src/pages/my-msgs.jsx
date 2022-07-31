import { useSelector } from "react-redux"
import { MsgsList } from "../cmps/msg-list"


export const MyMsgs = () => {
    const { user } = useSelector((storeState) => storeState.userModule)

    return <div className="my-msgs">
        <p className="my-msgs-header">My messeges:</p>
        <MsgsList msgs={user.msgs} />
    </div>
}