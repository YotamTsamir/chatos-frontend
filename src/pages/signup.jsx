import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useFormRegister } from "../hooks/useFormRegister"
import { userService } from "../services/user-service"
import { signup } from "../store/actions/user.actions"

export const Signup = () => {
    const { user } = useSelector((storeState) => storeState.userModule)
    const [editedUser, setEditedUser] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const [registerSignup, newSignup, setSignup] = useFormRegister({
        username: editedUser.username || '',
        password: '',
        fullname: '',
        email: ''
    })

    useEffect(() => {
        (async () => {
        
        })()

    }, [])

    const onSignup = async (ev) => {
        ev.preventDefault()
        if (user) {
            userService.addUser(newSignup)
            navigate('/admin')
            return
        } else if(editedUser){
            const newUser = await userService.updateUser(newSignup)
            console.log(newUser);
            navigate('/admin')
            return
        }
        console.log('i still did this');
        dispatch(signup(newSignup))
        navigate('/')
    }

    return <section>
        <div className="login">
            {(!user) && <h1>Sign up to your account</h1>}
            {(user && !editedUser) && <h1>Add acount</h1>}
            {(editedUser) && <h1>Edit user</h1>}
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