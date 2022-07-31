import { useFormRegister } from "../hooks/useFormRegister"


export const MsgModal = ({ sendMsg,user,setIsMsgModal }) => {
    const [msg, newMsg, setMsg] = useFormRegister({
        txt: ''
    })


    return <div className="msg-modal">
        <h1>Send</h1>
        <form onSubmit={(ev) => sendMsg(ev,user,newMsg,setIsMsgModal)}>
            <textarea {...msg('txt')} className="txt-msg"></textarea>
            <button className="btn-common">send</button>
        </form>
    </div>
}