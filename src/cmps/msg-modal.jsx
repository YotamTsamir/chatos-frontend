import { useFormRegister } from "../hooks/useFormRegister"


export const MsgModal = ({ sendMsg, user, setIsMsgModal }) => {
    const [msg, newMsg, setMsg] = useFormRegister({
        txt: ''
    })


    return <div className="msg-modal">
        <p>Send to {user.fullname}:</p>
        <button className="btn-common close-modal" onClick={() => setIsMsgModal(false)}>X</button>
        <form onSubmit={(ev) => sendMsg(ev, user, newMsg, setIsMsgModal)}>
            <textarea autoFocus {...msg('txt')} className="txt-msg"></textarea>
            <button className="btn-common send-btn">send</button>
        </form>
    </div>
}