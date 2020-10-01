import React from 'react'
import CustomButton from './../custom-button/custom-button.component.jsx'
import { singInWithGoogle } from "./../../firebase/firebase.js"
import './sing-in.styles.scss'
import { auth } from './../../firebase/firebase.js'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handelSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state
        try {
            auth.signInWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.log("problem with signinng in ")
        }

        this.setState({ email: "", password: "" })
    }
    handelChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className="group">
                <div className="sign-in">
                    <h1>I already have an account</h1>
                    <span>Sign in with your email account</span>

                    <form onSubmit={this.handelSubmit}>
                        <input type="email" name="email" value={this.state.email} required
                            onChange={this.handelChange}
                        />
                        <label className="form-input-label">Email</label>

                        <input type="password" name="password" value={this.state.password} required
                            onChange={this.handelChange}
                        />
                        <label className="form-input-label">Password</label>

                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn signInMethod={singInWithGoogle}>Sign In With Google</CustomButton>
                    </form>
                </div>
            </div>
        )
    }
}
export default SignIn;