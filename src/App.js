import React,{Component} from 'react';

import './App.css';
import './bootstrap.css';
// import Amplify from '@aws-amplify';
// import awsconfig from './aws-exports';
// amplify addition extragit 
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import LoginComponent from  './components/dashboard_stuffs/Login.jsx'

// Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">


      {/*<header className="App-header">
      </header>*/}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
crossorigin="anonymous"></link>


      <LoginComponent/>


    </div>
  );
}

export default App;
// export default withAuthenticator(App);
