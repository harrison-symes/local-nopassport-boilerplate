import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Logout from './Logout'


const Nav = props => {
  const {isAuthenticated, user} = props.auth
   return (
     <div className="row nav">
       {!isAuthenticated ? <Link to={'/signUp'}><button>Sign up</button></Link> : <Link to={'/account'}><button>Account</button></Link>}
       {!isAuthenticated ? <Link to={'/signIn'}><button>Login</button></Link> : <Logout/>}
     </div>


   )
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Nav)
