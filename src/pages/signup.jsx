import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useFormRegister } from "../hooks/useFormRegister"
import { signup } from "../store/actions/user.actions"

export const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registerSignup, newSignup, setSignup] = useFormRegister({
        username: '',
        password: '',
        fullname: '',
        email: ''
    })

    const onSignup = (ev) => {
        ev.preventDefault()
        dispatch(signup(newSignup))
        navigate('/')
    }

    return <section>
        <div className="login">
            <h1>Sign up to your account</h1>
            <form onSubmit={(ev) => onSignup(ev)} className="login-form" action="">
                <input {...registerSignup('username')} className="user-input username" placeholder="Username" type="text" />
                <input {...registerSignup('password')} className="user-input password" placeholder="Password" type="text" />
                <input {...registerSignup('fullname')} className="user-input fullname" placeholder="Fullname" type="text" />
                <input {...registerSignup('email')} className="user-input email" placeholder="email" type="text" />
                <button className="login-btn">Sign up!</button>
            </form>
        </div>
    </section>
}