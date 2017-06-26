import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import SignInFormContainer from '../containers/SignInFormContainer'



const App = () =>
   (
   <Router>
      <div className='app'>
         {/*<Header />*/}
         <div className="container-fluid">
           {/*<Route component={ErrorMessage} /> */}
           <Switch>
             <Route path="/" component={SignInFormContainer}/>
            {/* <Route component={PageNotFound} /> */}
           </Switch>
          </div>
         {/*<Footer /> */}
      </div>
   </Router>
)
export default App
