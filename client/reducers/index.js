import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import errors from './errors'
import auth from './auth'


export default combineReducers({
  auth,
  errors,
  form: formReducer
})
