import React from 'react'
import './sign-in-and-sign-up.scss'
import SingIn from './../../component/sing-in/sing-in.component.jsx'
import SignUp from "./../../component/sign-up/sign-up.component.jsx"
const SignInSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SingIn />
        <SignUp />
    </div>
)
export default SignInSignUp;