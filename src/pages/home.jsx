import { useEffect } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export const Home = () => {
    const { user } = useSelector((storeState) => storeState.userModule)

    useEffect(() => {

    }, [])

    return <div className="home-page">
        {(!user) && <div>
            <h1>Welcome to my app!</h1>
            <h1>Please log in or sign up to continue</h1>
        </div>}
        {(user) && <div>
            <h1>Hello {user.fullname}</h1>
            <NavLink to={`friendsList/${user._id}`}> <button className="home-btn friends-link-btn">Go to My friends</button></NavLink>
            <NavLink to={`myMsgs`}> <button className="home-btn msgs-link-btn">Go to My messeges</button></NavLink>
        </div>
        }
    </div>
}