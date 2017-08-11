import React from 'react'
import { Link } from 'react-router-dom'


const Header = () =>
   (
     <div className="row nav">
       <Link to={'/signUp'}><button className='form-button button-primary' type='submit'>Sign up</button></Link>
       <Link to={'/signIn'}><button className='form-button button-primary' type='submit'>Login</button></Link>
     </div>


   )

export default Header
