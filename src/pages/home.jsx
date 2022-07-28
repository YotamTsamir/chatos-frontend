import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"

export const Home = () => {
    const { user } = useSelector((storeState) => storeState.userModule)

    useEffect(() => {

    }, [])

    return <div>
        <h1>i am home</h1>
        {(user) && <h1>Hello {user.fullname}</h1>}
    </div>
}