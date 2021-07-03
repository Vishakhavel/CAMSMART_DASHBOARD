
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import { withRouter } from 'react-router';

import predator from './predator.svg'

import camsmart_head from './camsmart.jpg'

class HeaderComponent extends Component{
  render(){
    const isUserLoggedIn= AuthenticationService.IsUserLoggedIn();
    console.log(isUserLoggedIn);

    return <div>
      <header>



    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
{    /*{isUserLoggedIn && <a class="navbar-brand" href="https://www.futurenet.in/">CAMSMART DASHBOARD</a>}*/
}


{isUserLoggedIn && <a class="navbar-brand" href="https://ragz0125.github.io/CamSmart/"> <img src={camsmart_head} alt="CAMSMART" height="50" width="50"/> </a>}



    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {isUserLoggedIn && <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/welcome">HOME</a>
        </li>}
        {isUserLoggedIn && <li class="nav-item">
          <a class="nav-link" href="/console">CONSOLE</a>
        </li>}





      </ul>




      <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&<li><Link className="nav-link" to="/login">LOGIN</Link></li>}
                      {isUserLoggedIn && <li><Link className="nav-link" to="/login" onClick={AuthenticationService.logout}>LOGOUT</Link></li>}
                    </ul>
    </div>
  </div>
</nav>



       </header>




    </div>
  }

}

export default withRouter(HeaderComponent);
