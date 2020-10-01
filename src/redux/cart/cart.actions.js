import Cart_Action_Types from './cart.types.js'
export const toggelCartHidden = {
    type: Cart_Action_Types.Toggle_Cart_Dropdown
}
export const addItem = (item) => ({
    type: Cart_Action_Types.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: Cart_Action_Types.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: Cart_Action_Types.REMOVE_ITEM,
    payload: item
})