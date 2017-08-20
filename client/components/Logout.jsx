import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {logoutUser} from '../actions/logout'

const Logout = (props) => {
  return (
    <button id="logout" className="logout" onClick={() => props.logoutUser(() => {
      if (window.location.hash !== '#/') props.history.push('/')
    })
  }>Logout</button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (callback) => {
      dispatch(logoutUser(callback))
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
