import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogOutComponent from './LogOutComponent.jsx'
import ConsoleComponent from './ConsoleComponent.jsx'
// import FooterComponent from './FooterComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'

import HeaderComponent from './HeaderComponent.jsx'


export default class Login extends Component{
  render()
    {



    return(

        <div className="dashboard">

        <Router>
        <HeaderComponent/>
        <Switch>
        <Route path="/" exact component={LoginComponent}/>
        <Route path="/login" component={LoginComponent}/>
        <AuthenticatedRoute path="/welcome" component={WelcomeComponent}/>
        <AuthenticatedRoute path="/console" component={ConsoleComponent}/>
        <AuthenticatedRoute path="/logout" component={LoginComponent}/>

        <Route  component={ErrorComponent}/>
        </Switch>
        </Router>



      </div>

    )
  }
}






















 class LoginComponent extends Component{

constructor(props){
  super(props);
  this.state= {
    username: 'vichu',
    password: '',
    hasLoginFailed: false,
    showSuccessmessage: false
  }


  // this.handleUsernameChange = this.handleUsernameChange.bind(this);
  // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handleChange= this.handleChange.bind(this);
  this.loginClicked= this.loginClicked.bind(this);

}
loginClicked(){
  if(this.state.username==='tarp' && this.state.password==='tarp'){
    AuthenticationService.RegisterSucesssFulLogin(this.state.username,this.state.password);
    console.log('successful');
    this.props.history.push("/welcome")
    // this.setState({showSuccessmessage:true})
    // this.setState({hasLoginFailed:false})

  }
  else{
    console.log('failed');
    this.setState({showSuccessmessage:false})
    this.setState({hasLoginFailed:true})



  }
}


handleChange(event) {
  console.log(this.state);
  this.setState({[event.target.name]:event.target.value})
}


  render(){


    return (
      <div>
      <h1>LOGIN </h1>
      <div className="container">
      {this.state.hasLoginFailed && <div className="alert alert-warning"> LOGIN FAILED! </div>}
    <br/>

      USER NAME : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
      <br/>
      PASSWORD : <input type="password" name="password" value= {this.state.password} onChange={this.handleChange}/>
      <br/>

    <br/>
      <button type="button" class="btn btn-primary" onClick={this.loginClicked}>Login</button>



      </div>

      </div>

    )
  }


}
