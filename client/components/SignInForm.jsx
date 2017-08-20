import React from 'react'
import { Link } from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import {validate, renderField} from './validation-SignInForm'

let SignInForm = props => {
  const {handleSubmit, reset, submitting} = props

  return (
    <div className="container centered">
      <h2>Hello dear friend :)</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <Field className='input-field' name='username' component={renderField} type='text'/>
        </div>
        <div>
          <label>Password</label>
          <Field className='input-field' name='password' component={renderField} type='password'/>
        </div>

        <div className="row">
          <button className='form-button button-primary login-button' type='submit'>Log in</button>
        </div>
        <button className='form-button' type='button' disabled={submitting} onClick={reset}>Clear</button>
      </form>
      <div className="twelve columns"></div>
    </div>
  )
}

let createReduxForm = reduxForm({form: 'signin', validate: validate})

SignInForm = createReduxForm(SignInForm)

export default SignInForm
