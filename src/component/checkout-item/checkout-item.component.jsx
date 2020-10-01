import React from 'react'
import './checkout-item.styles.scss'
import { clearItemFromCart, removeItemFromCart, addItem } from './../../redux/cart/cart.actions.js'
import { connect } from 'react-redux'

const CheckoutItem = ({ item, clearItemFromCart, addItem, removeItemFromCart }) => {
    const { imageUrl, name, quantity, price } = item;

    return (
        < div className="checkout-item" >
            <div className="image-container">
                <img src={imageUrl} alt="item"></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => addItem(item)}>&#10094;</div>
                <span className="value"> {quantity}</span>
                <div className="arrow" onClick={() => removeItemFromCart(item)}>&#10095;</div>

            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(item)}>&#10005;</div>

        </div >
    )
}
const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);