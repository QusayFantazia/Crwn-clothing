import React from 'react';
import './App.css'
import { Switch, Route, Redirect } from "react-router-dom"
import { HomePage } from './pages/homepage/homepage.component'
import ShopPage from './pages/shopPage/shoppage.jsx'
import Header from './component/header/header.component'
import Checkout from './pages/checkout/checkout.component.jsx'
import SignInSignUp from './../src/pages/sing-in-and-sign-up/sign-in-and-sign-up.jsx'
import { auth, createuserProfileDocument } from './firebase/firebase.js'
import { setCurrentUser } from './redux/user/user.actions.js'
import { connect } from 'react-redux'
import { currentUserSelector } from './redux/user/user.selector.js'
import { createStructuredSelector } from 'reselect'



class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const { setCurrentUser } = this.props;
        const userRef = createuserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })

          // in case of debug i can check that value of the current user here
          console.log(snapshot)
        })
      }
      setCurrentUser(userAuth)
    })

  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch  >
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
