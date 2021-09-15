
import axios from 'axios'
class professor{

  ExecuteProfessorService(){
    console.log("API CALL TO DB")
    return axios.get('http://3.109.182.143:8080/rest/users/all');
    /*return axios.get('g');*/
  }

  ExecuteProfessorDeleteService(id){
    console.log("API DELETE CALL TO DB")
    /*axios.delete('http://localhost:8080/rest/users/delete/${id}');*/
    axios.delete('http://3.109.182.143:8080/rest/users/delete/${id}'); /*13.232.44.96*/
  }



}

export default new professor()
