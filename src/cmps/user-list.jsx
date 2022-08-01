import { useEffect, useState } from "react"
import { UserPreview } from "./user-preview"
import { userService } from "../services/user-service"

export const UserList = ({ users,openMsgModal, sendMsg,onAdmin, updateUsers,onAddFriend,onRemoveFriend }) => {

    if (!users) return <h1>Loading...</h1>
    return <div className="user-list">
        {(users.map(user => <UserPreview openMsgModal={openMsgModal} onRemoveFriend={onRemoveFriend} onAdmin={onAdmin} sendMsg={sendMsg} onAddFriend={onAddFriend} updateUsers={updateUsers} key={user._id} user={user} />))}
    </div>
}