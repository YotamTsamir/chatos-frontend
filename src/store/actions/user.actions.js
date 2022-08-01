import { userService } from '../../services/user-service.js'

export function loadUsers() {
    return async (dispatch) => {
        try {
            dispatch({ type: 'LOADING_START' })
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function setDarkMode(isDarkMode) { 
    return dispatch => {
        dispatch({type:'SET_DARK_MODE',isDarkMode})
    }
}

export function updateUser(user) {
    return async (dispatch) => {
        const updatedUser = await userService.updateUser(user)
        dispatch({ type: 'UPDATE_USER', updatedUser })
    }

}

export function loadUser(newUser) {
    return async (dispatch) => {
        const user = await userService.getById(newUser._id)
        dispatch({type:'SET_USER',user})
    }
}

export function signup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({
                type:'SET_USER',
                user
            })
        } catch (err) {
            console.error('Error:', err)
        }
    }
}

export function login(credentials) {
    return async (dispatch) => {
        try {
        const user = await userService.login(credentials)
        dispatch({
            type: 'SET_USER',
            user,
        })
        } catch (err) {
            console.error('Error:', err)
        }
            
    }
}

export function logout() {
    // Action Creator
    return (dispatch) => {
        userService
            .logout()
            .then(() => {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            })
            .catch((err) => {
                console.error('Error:', err)
            })
    }
}
