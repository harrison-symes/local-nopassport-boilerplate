import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import SignInFormContainer from '../containers/SignInFormContainer'
import SignUpFormContainer from '../containers/SignUpFormContainer'
import Header from './Header'
import Nav from './Nav'

const App = () => (
  <Router>
    <div className='app'>
      <Header/>
      <Nav/>
      <Route exact path="/signIn" component={SignInFormContainer}/>
      <Route exact path="/signUp" component={SignUpFormContainer}/>
    </div>
  </Router>
)
export default App
