import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import SignInFormContainer from '../containers/SignInFormContainer'
import Header from './Header'
import Home from './Home'

const App = () => (
  <Router>
    <div className='app'>
      <Header/> {/*<Route component={ErrorMessage} /> */}
      <Route exact path="/" component={SignInFormContainer}/>
      <Route path="/outbursts" component={Home}/> {/* <Route component={PageNotFound} /> */}
      {/*<Footer /> */}
    </div>
  </Router>
)
export default App
