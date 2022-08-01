import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFormRegister } from "../hooks/useFormRegister"
import { userService } from "../services/user-service"


export const EditUser = () => {
    const [editedUser, setEditedUser] = useState('')
    const params = useParams()
    const navigate = useNavigate()
    const [field, setFields] = useState({
        username: editedUser.username,
        password: '',
        fullname: '',
        email: ''
    })
    const [registerNewUser, newUser, setNewUser] = useFormRegister({
        username: editedUser.username,
        password: '',
        fullname: '',
        email: ''
    })

    useEffect(() => {
        (async () => {
            const currUser = await userService.getById(params.id)
            setEditedUser(currUser)
        })()
    }, [])

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setEditedUser({ ...editedUser, [field]: value })
        setFields((prevFields) => ({ ...prevFields, [field]: value }))
    }

    const toUpperName = (name) => {
        const splitName = name.split(" ")
        const fixedNameArr = splitName.map(name => { return name.charAt(0).toUpperCase() + name.substring(1) })
        const fixedName = fixedNameArr.join(" ")
        return fixedName
    }

    const onEdit = async (ev) => {
        ev.preventDefault()
        const newUser = { ...editedUser }
        newUser.fullname = toUpperName(newUser.fullname)
        setEditedUser(newUser)
        await userService.updateOtherUser(newUser)
        navigate('/admin')
    }

    return <div className="login">
        <h1>Edit user</h1>
        <form onSubmit={(ev) => onEdit(ev)} className="login-form" action="">
            <input onChange={(ev) => handleChange(ev)} value={editedUser.username} id="username" name="username" className="user-input username" placeholder="Username" type="text" />
            <input onChange={(ev) => handleChange(ev)} value={editedUser.fullname} id="fullname" name="fullname" className="user-input fullname" placeholder="Fullname" type="text" />
            <input onChange={(ev) => handleChange(ev)} value={editedUser.email} id="email" name="email" className="user-input email" placeholder="email" type="text" />
            <button className="login-btn">Edit user!</button>
        </form>
    </div>
}