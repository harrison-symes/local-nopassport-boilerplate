import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import SignInFormContainer from '../containers/SignInFormContainer'
import SignUpFormContainer from '../containers/SignUpFormContainer'
import Header from './Header'
import Nav from './Nav'
import Account from './Account'

const App = () => (
  <Router>
    <div className='app'>
      <Header/>
      <Nav/>
      <Route exact path="/signIn" component={SignInFormContainer}/>
      <Route exact path="/signUp" component={SignUpFormContainer}/>
      <Route exact path="/account" component={Account}/>
    </div>
  </Router>
)
export default App
