import React from 'react'
import './checkout.styles.scss'
import CheckoutItem from './../../component/checkout-item/checkout-item.component.jsx'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { cartItemsSelctor } from './../../redux/cart/cart.selectors.js'
import { cartTotal } from './../../redux/cart/cart.selectors.js'
import StripeCheckoutButton from './../../component/stripe-button/stripe-button.component.jsx'



const Checkout = ({ items, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>name</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            items.map(item => <CheckoutItem key={item.id} item={item} />)
        }
        <div className="total">
            <span>TOTAL:${total}</span>
        </div>
        <div className='test-warning'>
            Please use the following test credit card for payments
            <br></br>
            4242 4242 4242 4242 - EXP:01-20 - CVV:123
        </div>

        <StripeCheckoutButton price={total} />





    </div>
)
const mapStateToProps = createStructuredSelector({
    items: cartItemsSelctor,
    total: cartTotal
})
export default connect(mapStateToProps)(Checkout);