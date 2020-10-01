import { createSelector } from 'reselect'

const cartSelector = state => state.cart;

export const cartItemsSelctor = createSelector(cartSelector, cart => cart.items)

export const cartItemsCountSelector = createSelector([cartItemsSelctor], items => items.reduce((accumlatedValue, item) => accumlatedValue = accumlatedValue + item.quantity, 0))

export const cartHiddenSelector = createSelector(cartSelector, cart => cart.hidden)

export const cartTotal = createSelector([cartItemsSelctor], items => items.reduce((accumlatedValue, item) => accumlatedValue = accumlatedValue + item.quantity * item.price, 0))

