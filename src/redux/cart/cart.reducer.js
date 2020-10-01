import Cart_Action_Types from './cart.types.js'
import { addItemToCart, removeItemToCart } from './cart.util.js'
const INITIAL_STATE = {
    hidden: true,
    items: []
}
const CartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case Cart_Action_Types.Toggle_Cart_Dropdown:
            return {
                ...state,
                hidden: !state.hidden
            }
        case Cart_Action_Types.ADD_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload),

            }
        case Cart_Action_Types.REMOVE_ITEM:
            return {
                ...state,
                items: removeItemToCart(state.items, action.payload)
            }
        case Cart_Action_Types.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}
export default CartReducer