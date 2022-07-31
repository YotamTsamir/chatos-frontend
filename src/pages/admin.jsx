import { UserList } from "../cmps/user-list"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { userService } from "../services/user-service"

export const AdminPage = () => {
    const { user } = useSelector((storeState) => storeState.userModule)
    const [users, setUsers] = useState('')

    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            const userList = await userService.getUsers()
            setUsers(userList)
        })()
        if (!user.isAdmin) navigate('/')
    }, [])

    const updateUsers = async () => {
        const userList = await userService.getUsers()
        setUsers(userList)
    }


    if (!users) return <h1>Loading...</h1>
    return <div className="admin-page">
        <UserList onAdmin={true} updateUsers={updateUsers} users={users} />
        <NavLink to='/signup'> <button>Add user</button></NavLink>
    </div>
}