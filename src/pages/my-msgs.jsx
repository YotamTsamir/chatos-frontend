import { useSelector } from "react-redux"
import { MsgsList } from "../cmps/msg-list"


export const MyMsgs = () => {
    const { user } = useSelector((storeState) => storeState.userModule)

    return <div className="my-msgs">
        <h1>I AM MSGS</h1>
        <MsgsList msgs={user.msgs} />
    </div>
}