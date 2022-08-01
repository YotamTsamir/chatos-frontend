

import { userService } from "../../services/user-service";

const initialState = {
    user: userService.getLoggedinUser(),
    isDarkMode: false,
}
export function userReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }
        case 'UPDATE_USER':
            return { ...state, user: action.updatedUser }
        case 'SET_DARK_MODE':
            return { ...state, isDarkMode: action.isDarkMode }
        default:
            return state
    }

    return newState;

}