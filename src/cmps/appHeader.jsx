import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { logout, setDarkMode } from "../store/actions/user.actions"

export const AppHeader = () => {
    const { user } = useSelector((storeState) => storeState.userModule)
    const { isDarkMode } = useSelector((storeState) => storeState.userModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    const toggleDark = () => {
        dispatch(setDarkMode(!isDarkMode))
        console.log(isDarkMode);
        const body = document.body
        if(!isDarkMode) body.classList.add('dark')
        else  body.classList.remove('dark')
        // (isDarkMode) ? body.classList.add('dark') : body.classList.remove('dark')
    }

    return <div className={`header ${(isDarkMode) ? 'dark': ''}`}>
        <NavLink className={`logo ${(isDarkMode) ? 'dark': ''}`} to='/'>
            <div>Chatos</div>
        </NavLink>
        <div className={`user-actions ${(isDarkMode) ? 'dark': ''}`}>
            {(!isDarkMode) && <button onClick={() => toggleDark()} className={`header-btn admin-page-btn ${(isDarkMode) ? 'dark': ''}`}>Dark mode</button>}
            {(isDarkMode) && <button onClick={() => toggleDark()} className={`header-btn admin-page-btn ${(isDarkMode) ? 'dark': ''}`}>Light mode</button>}
            {(user?.isAdmin) && <NavLink to='/admin'>
                <button className={`header-btn admin-page-btn ${(isDarkMode) ? 'dark': ''}`}>Admin page</button>
            </NavLink>}
            {(user) && <button onClick={() => onLogout()} className={`header-btn logout-link-btn ${(isDarkMode) ? 'dark': ''}`}>Logout</button>}
            {(!user) && <NavLink to='/login'>
                <button className={`header-btn login-link-btn ${(isDarkMode) ? 'dark': ''}`}>Login</button>
            </NavLink>}
            {(!user) && <NavLink to='/signup'>
                <button className={`header-btn signup-link-btn ${(isDarkMode) ? 'dark': ''}`}>Sign-up</button>
            </NavLink>}
        </div>
    </div>
}