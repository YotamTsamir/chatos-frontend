import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


export const MsgPreview = ({ msg }) => {
    const { isDarkMode } = useSelector((storeState) => storeState.userModule)
    const [sentAt, setSentAt] = useState('')
    useEffect(() => {
        const timeToShow = new Date(msg.time)
        const date = timeToShow.toDateString()
        const hour = timeToShow.getHours()
        const minute = timeToShow.getMinutes()
        const fullDate = `${date} , ${hour}:${minute}`
        setSentAt(fullDate)
    }, [])

    if (!msg && !sentAt) return <h1>Loading...</h1>
    return <div className={`msg-preview ${(isDarkMode) ? 'dark-msg' : ''}`}>
        <p>{msg.from.fullname}</p>
        <p>{msg.txt}</p>
        <p>{sentAt}</p>
    </div>
}