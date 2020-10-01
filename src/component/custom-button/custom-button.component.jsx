import React from 'react';
import './custom-button.styles.scss'
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherButtonProps }) => {
    return (
        <div>
            <button className={`${inverted ? "inverted" : ""} custom-button`} onClick={otherButtonProps.signInMethod}>
                {children}
            </button>
        </div >
    )
}
export default CustomButton;