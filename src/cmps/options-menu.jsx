import { userService } from "../services/user-service"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
export const OptionsMenu = ({ user, updateUsers }) => {
    const { isDarkMode } = useSelector((storeState) => storeState.userModule)

    const onDeleteUser = async () => {
        await userService.deleteUser(user._id)
        updateUsers()
    }

    return <div className={`options-menu ${(isDarkMode) ? 'dark-options' : ''}`}>
        <NavLink to={`/editUser/${user._id}`}><button className={`${(isDarkMode) ? 'dark-options' : ''}`}>Edit</button></NavLink>
        <button className={`${(isDarkMode) ? 'dark-options' : ''}`} onClick={() => onDeleteUser()}>Delete</button>
    </div>
}