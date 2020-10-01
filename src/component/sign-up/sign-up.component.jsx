import React from 'react';
import CustomButton from './../custom-button/custom-button.component.jsx'

import { auth, createuserProfileDocument } from './../../firebase/firebase.js'

import './sign-up.styles.scss'


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handelSubmit = (event) => {
        event.preventDefault();

        if (this.state.confirmPassword !== this.state.password) {
            alert("Password and confirmed password are not equal");
            return;
        }
        try {
            console.log(this.state.password)
            const { userAuth } = auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            createuserProfileDocument(userAuth, this.state.displayName)
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch {
            console.log("error while signing up")
        }
    }

    handelChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title"> I dont have an acount</h2>
                <span>making an account using email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <label> Display Name</label>
                    <input
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        onChange={this.handelChange}
                        label="displayName"
                        required
                    >
                    </input>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handelChange}
                        label="displayName"
                        required
                    >
                    </input>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handelChange}
                        label="password"
                        required
                    >
                    </input>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={this.state.conf}
                        onChange={this.handelChange}
                        label="confim password"
                        required
                    >
                    </input>
                    <CustomButton type="submit">Sign Up</CustomButton>

                </form>

            </div>
        )
    }
}
export default SignUp;