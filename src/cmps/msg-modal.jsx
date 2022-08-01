import { useSelector } from "react-redux"
import { useFormRegister } from "../hooks/useFormRegister"


export const MsgModal = ({ sendMsg, user, setIsMsgModal }) => {
    const { isDarkMode } = useSelector((storeState) => storeState.userModule)
    const [msg, newMsg, setMsg] = useFormRegister({
        txt: ''
    })


    return <div className={`msg-modal ${(isDarkMode) ? 'dark-modal' : ''}`}>
        <p>Send to {user.fullname}:</p>
        <button className={`btn-common close-modal ${(isDarkMode) ? 'dark-modal' : ''}`} onClick={() => setIsMsgModal(false)}>X</button>
        <form onSubmit={(ev) => sendMsg(ev, user, newMsg, setIsMsgModal)}>
            <textarea autoFocus {...msg('txt')} className={`txt-msg ${(isDarkMode) ? 'dark-modal' : ''}`}></textarea>
            <button className="btn-common send-btn">send</button>
        </form>
    </div>
}