
import React, {Component} from 'react'
import {Route,Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class AuthenticatedRoute extends Component{
  render(){
    if(AuthenticationService.IsUserLoggedIn())
    {
      return (<Route {...this.props}/>)

    }
    else{
    return  (<redirect to="/login"/>)
    }



}

}
export default AuthenticatedRoute
