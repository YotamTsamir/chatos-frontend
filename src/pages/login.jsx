import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useFormRegister } from "../hooks/useFormRegister"
import { login } from "../store/actions/user.actions"

export const Login = () => {
    const { user } = useSelector((storeState) => storeState.userModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registerLogin, newLogin, setLogin] = useFormRegister({
        username: '',
        password: ''
    })

    useEffect(() => {
        if (user) navigate('/')
    }, [user])

    const onLogin = (ev) => {
        ev.preventDefault()
        dispatch(login(newLogin))
    }

    return <section>
        <div className="login">
            <h1>Login to your account</h1>
            <form onSubmit={(ev) => onLogin(ev)} className="login-form" action="">
                <input {...registerLogin('username')} autoComplete="off" className="user-input username" placeholder="Username" type="text" />
                <input {...registerLogin('password')} autoComplete="off" className="user-input password" placeholder="Password" type="text" />
                <button className="login-btn">Login!</button>
            </form>
        </div>
    </section>
}