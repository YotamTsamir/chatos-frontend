import { MsgPreview } from "./msg-preview"


export const MsgsList = ({ msgs }) => {
    console.log(msgs);

    if (!msgs.length) return <h1>You have no messages yet!</h1>
    return <div className="friends-list">
        {msgs.map(msg => <MsgPreview key={msg.id} msg={msg} />)}
    </div>
}