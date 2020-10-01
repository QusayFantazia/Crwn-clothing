import React from 'react'
import { connect } from 'react-redux'
import CartItem from './../cart-item/cart-item.component.jsx'
import { withRouter } from 'react-router-dom'
import './cart-dropdown.styles.scss'
import { cartItemsSelctor } from './../../redux/cart/cart.selectors.js'
import { createStructuredSelector } from 'reselect'
import { toggelCartHidden } from './../../redux/cart/cart.actions.js'

const CartDropdown = ({ items, history, dispatch }) => (
    <div className="cart-dropdown">
        {items.length ?
            <div className="cart-items">
                {items.map(item => <CartItem key={item.id} item={item}></CartItem>)}
            </div> :
            <span className="empty-message"> Your cart is empy</span>
        }
        <button onClick={() => { history.push('/checkout'); dispatch(toggelCartHidden) }} >Go To Check Out</button>
    </div>
)
const mapStateToProps = createStructuredSelector({
    items: cartItemsSelctor
})
export default withRouter(connect(mapStateToProps, null)(CartDropdown));