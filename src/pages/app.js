import React from 'react'
import { Router } from '@reach/router'
import {
  Home,
  Profile,  
  Reset,
  SignIn,
  SignUp,
  IndexPage,
  MyAccount  
} from '../components/Pages'
import PrivateRoute from '../components/Routes/PrivateRoute'
import PublicRoute from '../components/Routes/PublicRoute'
import Amplify from 'aws-amplify'
import config from '../aws-exports'

const App = () => {
  Amplify.configure(config)
  return (       
      <Router>      
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/my-account" component={MyAccount} />
        <PublicRoute path="/signin" component={SignIn} />
        <PublicRoute path="/signup" component={SignUp} />
        <PublicRoute path="/reset" component={Reset} />      
        <PublicRoute path="/" component={IndexPage} />
      </Router>    
  )
}

export default App