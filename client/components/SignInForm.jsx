import React from 'react'
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
          <Field className='input-field' name='username' component={renderField} type='text' />
        </div>
        <div>
          <label>Password</label>
          <Field className='input-field' name='password' component={renderField} type='password' />
        </div>

        <button className='form-button button-primary' type='submit'>Log in</button><br />
        <button className='form-button' type='button' disabled={submitting} onClick={reset}>Clear</button>
      </form>
      <div className="twelve columns">
      </div>
    </div>
  )
}

let createReduxForm = reduxForm({
  form: 'signin',
  validate: validate
})

SignInForm = createReduxForm(SignInForm)

export default SignInForm
