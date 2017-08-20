import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'



const Account = props => {
  const {isAuthenticated, user} = props.auth
   return (
     <div>Hello, your account number is {user.id}</div>

   )
}
const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Account)
