import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import errors from './errors'
import auth from './auth'
import quote from './quote'


export default combineReducers({
  auth,
  errors,
  quote,
  form: formReducer
})
