import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from './../../assessts/shopping-bag.svg'
import React from 'react'
import { toggelCartHidden } from './../../redux/cart/cart.actions.js'
import { connect } from 'react-redux'
import { cartItemsCountSelector } from './../../redux/cart/cart.selectors.js'
import { createStructuredSelector } from 'reselect'
const CartIcon = ({ toggelCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggelCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>

)

const mapDispatchToProps = dispatch => ({
    toggelCartHidden: () => dispatch(toggelCartHidden)
})
const mapStateToProps = createStructuredSelector({
    itemCount: cartItemsCountSelector
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);