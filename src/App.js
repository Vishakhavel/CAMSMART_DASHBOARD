import React,{Component} from 'react';

import './App.css';
import './bootstrap.css';

import LoginComponent from  './components/dashboard_stuffs/Login.jsx'



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
