import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { logout } from "../store/actions/user.actions"

export const AppHeader = () => {
    const { user } = useSelector((storeState) => storeState.userModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return <div className="header">
        <NavLink className='logo' to='/'>
            <div>Chatos</div>
        </NavLink>
        <div className="user-actions">
            {(user?.isAdmin) && <NavLink to='/admin'>
                <button className="header-btn admin-page-btn">Admin page</button>
            </NavLink>}
            {(user) && <button onClick={() => onLogout()} className="header-btn logout-link-btn">Logout</button>}
            {(!user) && <NavLink to='/login'>
                <button className="header-btn login-link-btn">Login</button>
            </NavLink>}
            {(!user) && <NavLink to='/signup'>
                <button className="header-btn signup-link-btn">Sign-up</button>
            </NavLink>}
        </div>
    </div>
}