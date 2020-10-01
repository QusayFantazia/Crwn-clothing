import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './../../assessts/crown.svg'
import './header.styles.scss'
import { auth } from './../../firebase/firebase.js'
import { connect } from 'react-redux'
import CartIcon from './../../component/cart-icon/cart-icon.component.js'
import CartDropdown from "./../../component/cart-dropdown/cart-dropdown.component.jsx"
import { currentUserSelector } from './../../redux/user/user.selector.js'
import { cartHiddenSelector } from './../../redux/cart/cart.selectors.js'
import { createStructuredSelector } from 'reselect'

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser
                    ? <div className="option" onClick={() => { auth.signOut().then(() => { console.log("user signed out") }) }}>Sign Out</div>
                    : <Link to='/signin'>Sign In</Link>
            }

            <CartIcon />

        </div>{
            hidden ? null : <CartDropdown />
        }


    </div >
);
const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: cartHiddenSelector
})
export default connect(mapStateToProps)(Header);
// There might be a problem with setting redux 2 video watch again in case