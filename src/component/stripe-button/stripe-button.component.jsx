import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = 100 * price;
    const publishableKey = "pk_test_51HV43ZAZGEhKNQn41uOMp4CPRkfWgndzy3kSqKxQqDH7QNDShQqlhKFUQzSwfpfmQFeoi1EU5kLFjUR8gQNG82AM001SreZ5I3"

    const onToken = (token) => {
        console.log(token)
        alert('Payment successful')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="crown clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Give Money"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;