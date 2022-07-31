import { userService } from "../services/user-service"
import { NavLink } from "react-router-dom"
export const OptionsMenu = ({ user, updateUsers }) => {

    const onDeleteUser = async () => {
        await userService.deleteUser(user._id)
        updateUsers()
    }

    return <div className="options-menu">
        <NavLink to={`/editUser/${user._id}`}><button>Edit</button></NavLink>
        <button onClick={() => onDeleteUser()}>Delete</button>
    </div>
}