import { UserActionTypes } from './user.types.js'
export const setCurrentUser = user => ({
    type: UserActionTypes.Set_Current_User,
    payload: user
})