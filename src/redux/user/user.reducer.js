import { UserActionTypes } from './user.types.js'
const INITIAL_STATE = {
    curent_user: null
}
// INITIAL_STATE is a fallback in case there is not INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.Set_Current_User:
            return {
                ...state,
                curent_user: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;