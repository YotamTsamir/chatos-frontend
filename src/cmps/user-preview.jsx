import { useState } from "react"
import { MsgModal } from "./msg-modal"
import { OptionsMenu } from "./options-menu"

export const UserPreview = ({ user, sendMsg, updateUsers, onAddFriend, onAdmin, onRemoveFriend }) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [isMsgModal, setIsMsgModal] = useState(false)

    return <div className="user-preview">
        <p className="user-name">{user.fullname}</p>
        {(onAdmin) && <button onClick={() => setIsOptionsOpen(!isOptionsOpen)} className="options-btn">Options</button>}
        {(onAddFriend) && <button className="btn-common"  onClick={() => onAddFriend(user._id)}>Add friend</button>}
        {(sendMsg) && <div className="send-remove-container"><button className="btn-common" onClick={() => setIsMsgModal(!isMsgModal)}>Send messege</button>
        <button className="btn-common" onClick={() => onRemoveFriend(user)}>Remove friend</button></div>}
        {(isOptionsOpen) && <OptionsMenu updateUsers={updateUsers} user={user} />}
        {(isMsgModal) && <MsgModal setIsMsgModal={setIsMsgModal} toFriend={user} sendMsg={sendMsg} user={user} />}
    </div>
}