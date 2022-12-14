import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'user'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    updateUser,
    getUsers,
    pushNotification,
    getById,
    deleteUser,
    addUser,
    getMiniUser,
    updateOtherUser
}

window.us = userService

async function pushNotification(activity) {
    const user = await getLoggedinUser()
    user.notifications.unshift(activity)
}

async function getById(userId) {
    return await httpService.get(`user/${userId}`)
}

async function login(credentials) {
    try {
        const user = await httpService.post('auth/login', credentials)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user
    } catch (err) {
        return false
    }
}

async function getUsers() {
    return await httpService.get('user/')
}

async function logout() {
    sessionStorage.clear(STORAGE_KEY_LOGGEDIN)
    return await httpService.post('auth/logout')
}

async function updateUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return await httpService.put(`user/${user._id}`, user)
}

async function updateOtherUser(user) {
    console.log(user);
    return await httpService.put(`user/${user._id}`, user)
}

async function deleteUser(userId) {
    return await httpService.delete(`user/${userId}`)
}

async function addUser(userInfo) {
    return await httpService.put('user/addUser', userInfo)
}

async function signup(userInfo) {
    await httpService.post('auth/signup', userInfo)
    const user = await storageService.post(STORAGE_KEY, userInfo)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
}


function getLoggedinUser() {
    const user = (sessionStorage.getItem(STORAGE_KEY_LOGGEDIN)) ? sessionStorage.getItem(STORAGE_KEY_LOGGEDIN) : null
    return JSON.parse(user || null)
}

function getMiniUser(user) {
    const miniUser = { _id: user._id, fullname: user.fullname }
    return miniUser
}





