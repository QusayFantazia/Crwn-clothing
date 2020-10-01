import { createSelector } from 'reselect'

const inputSelector = (state) => (state.user)

export const currentUserSelector = createSelector([inputSelector], (user) => user.curent_user)

