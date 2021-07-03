class  AuthenticationService {
  RegisterSucesssFulLogin(username,password){
    console.log("succesfull login regsitered")
    sessionStorage.setItem('authenticatedUser',username);


  }


  logout(){
    sessionStorage.removeItem('authenticatedUser');


  }

  IsUserLoggedIn(){
      let user = sessionStorage.getItem('authenticatedUser');
      if(user===null) return false
      return true



  }
}


export default new AuthenticationService()
