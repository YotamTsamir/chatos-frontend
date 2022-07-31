import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserList } from "../cmps/user-list"
import { socketService, SOCKET_EMIT_SEND_MSG } from "../services/socket.service"
import { userService } from "../services/user-service"
import { utilService } from "../services/util.service"
import { updateUser } from "../store/actions/user.actions"


export const MyFriends = () => {
    const { user } = useSelector((storeState) => storeState.userModule)
    const [addFriend, setAddFriend] = useState(false)
    const [users, setUsers] = useState('')
    const [friends, setFriends] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            getUsersToShow()
            getFriends()
        })()
    }, [])

    const getUsersToShow = async () => {
        const userList = await userService.getUsers()
        user.friends.map(friendId => {
            const idx = userList.findIndex(user => user._id === friendId)
            userList.splice(idx, 1)
        })
        const userIdx = userList.findIndex(currUser => currUser._id === user._id)
        userList.splice(userIdx,1)
        setUsers(userList)

    }

    const onAddFriend = async (friend) => {
        const miniUser = userService.getMiniUser(user)
        const miniFriend = userService.getMiniUser(friend)
        socketService.emit(SOCKET_EMIT_SEND_MSG,{miniUser,friend})
        user.friends.push(friend)
        dispatch(updateUser(user))
        getFriends()
        getUsersToShow()
    }

    const getFriends = async () => {
        const currFriendsUnresolved = user.friends.map(async friend => await userService.getById(friend))
        const currFriendsResolved = await Promise.all(currFriendsUnresolved)
        setFriends(currFriendsResolved)

    }

    const onRemoveFriend = (friend) => {
        const friendIdx = user.friends.findIndex(currFriend => friend._id === currFriend)
        user.friends.splice(friendIdx, 1)
        dispatch(updateUser(user))
        getFriends()
        getUsersToShow()
    }

    const sendMsg = async (ev, friend, msg,setIsMsgModal) => {
        ev.preventDefault()
        const miniSender = userService.getMiniUser(user)
        const newMsg = {
            id: utilService.getRandomIntInclusive(0, 10000),
            from: miniSender,
            txt: msg.txt,
            time: new Date()
        }
        friend.msgs.push(newMsg)
        socketService.emit(SOCKET_EMIT_SEND_MSG,newMsg)
        setIsMsgModal(false)
        await userService.updateUser(friend)
    }



    return <div className="friends-list">
        <h1>Friends list</h1>
        {(user.friends) && <UserList onRemoveFriend={onRemoveFriend} sendMsg={sendMsg} users={friends} />}
        {(!user.friends) && <h1>You have no friends</h1>}
        <button className="btn-common" onClick={() => setAddFriend(!addFriend)}>Add friends</button>
        {(addFriend) && <UserList onAddFriend={onAddFriend} users={users} />}
    </div>
}