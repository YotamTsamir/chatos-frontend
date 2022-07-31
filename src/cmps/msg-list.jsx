import { MsgPreview } from "./msg-preview"


export const MsgsList = ({ msgs }) => {
    console.log(msgs);

    if (!msgs.length) return <h1>You have no messeges yet!</h1>
    return <div>
        {msgs.map(msg => <MsgPreview key={msg.id} msg={msg} />)}
    </div>
}