import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {validate, renderField} from './validation-SignUpForm'

let SignUpForm = props => {
  const {handleSubmit, reset, submitting} = props

  return (
    <div className="container">
      <h2>Let it burst!</h2>
      <form className="register" onSubmit={handleSubmit}>
        <div className="offset-by-three three columns centered">
          <div>
            <label>Your desired username</label>
            <Field className='input-field' name='username' component={renderField} type='text' />
          </div>
          <div>
            <label>Password</label>
            <Field className='input-field' name='password' component={renderField} type='password' />
          </div>
          <div>
            <label>Confirm password</label>
            <Field className='input-field' name='confirm' component={renderField} type='password' />
            <button className='form-button button button-primary' type='submit'>Add User</button><br />
            <button className='form-button button clear' type='button' disabled={submitting} onClick={reset}>Clear</button>
          </div>
        </div>
      </form>
    </div>
  )
}

let createReduxForm = reduxForm({
  form: 'signup',
  validate: validate
})

SignUpForm = createReduxForm(SignUpForm)

export default SignUpForm
