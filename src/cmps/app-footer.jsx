import { useSelector } from "react-redux"


export const AppFooter = () => {
    const { isDarkMode } = useSelector((storeState) => storeState.userModule)

    return <div className={`header footer ${(isDarkMode) ? 'dark': ''}`}>
        <p>Coffee rights Yotam Tsamir</p>
    </div>
}