
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogOutComponent from './LogOutComponent.jsx'
import professor from '../../api/dashboard/professor.js'



class ConsoleComponent extends Component{    // equivalent og todocomponent in course
  constructor(props){
    super(props)
    this.retrieveProfInfo=this.retrieveProfInfo.bind(this)
    this.deleteProfInfo=this.deleteProfInfo.bind(this)



    this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)

    this.handleError=this.handleError.bind(this)
    this.displayAll=this.displayAll.bind(this)




    this.state={
      prof_name:'professor_name displays here',
      prof_alert_type:'prof_teamName displays here',
      /*prof_image:'prof_salary displays here',*/
      prof_id:'prof_id displays here',
      prof_date:'prof_id displays here',
      prof_time_stamp:'prof_id displays here',
      n:0,
      prof_arr_name:[],
      prof_arr_id:[],
      /*prof_arr_image:[],*/
      prof_arr_alert_type:[],
      prof_arr_date:[],
      prof_arr_time_stamp:[],
      message: null,
      profs:[]

    }



  }

  render(){
    return(<div >

      <br/>
      <br/>
   <button type="button" className="btn btn-primary" onClick={this.retrieveProfInfo} >RETRIEVE LOGS</button>

<hr/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h1> POTENTIAL THREAT LOGS </h1>
{this.state.message && <div class="alert alert-success">{this.state.message}</div>}

<div class="container welcome">
<table class=" innertable table ">

<thead>
<tr>

  <th> ID </th>
  <th> LOCATION </th>
  <th> TIME </th>
  <th> DATE </th>
  <th> ALERT_TYPE </th>

  <hr></hr>


</tr>

</thead>

<td>



       <p>{this.state.prof_arr_id} </p>


</td>



<td>
       <p>{this.state.prof_arr_name}</p>






     </td>


<td>

       <p>{this.state.prof_arr_time_stamp} </p>


     </td>


<td>
       <p>{this.state.prof_arr_date} </p>


     </td>


<td>
       <p>{this.state.prof_arr_alert_type}</p>


      </td>


{/*<td>

         <p>{this.state.prof_arr_image}</p>


      </td>*/}




{/*<td>

<button type="button" className="btn btn-primary" onClick={this.deleteProfInfo} >DELETE OLDEST LOG</button>

</td>*/}

<br/>

</table>

</div>


   </div>

    )










  }
  displayAll(){
    console.log("hey there from displayAll method");

  }

refreshPage()
{
}

deleteProfInfo(){
  var k=1099;
  professor.ExecuteProfessorDeleteService(k)
  k+=1;
  this.refreshPage()

}
  retrieveProfInfo(){
    professor.ExecuteProfessorService()

    .then( response => this.handleSuccessfulResponse(response,this.state.n))
  }

  handleSuccessfulResponse(response,n){
    // profs=response;
    console.log("vichu");





      //console.log(response.data.length)
      var str="";
      var prof_arr_dummy_name = [];
      var prof_arr_dummy_id = [];
     /*var prof_arr_dummy_image = [];*/
    var prof_arr_dummy_alert_type = [];
      var prof_arr_dummy_timestamp = [];
      var prof_arr_dummy_date = [];

          for(var i=0;i<response.data.length;i++)
      {
        prof_arr_dummy_name.push(response.data[i].name);
        prof_arr_dummy_id.push(response.data[i].id);
        /*prof_arr_dummy_image.push(response.data[i].image);*/
        prof_arr_dummy_alert_type.push(response.data[i].alert_type);
        prof_arr_dummy_timestamp.push(response.data[i].time_stamp);
        prof_arr_dummy_date.push(response.data[i].date);


        // prof_arr_dummy.join(" ");
        prof_arr_dummy_name.push(<br/>);
        prof_arr_dummy_id.push(<br/>);
        /*prof_arr_dummy_image.push(<br/>);*/
        prof_arr_dummy_alert_type.push(<br/>);
        prof_arr_dummy_timestamp.push(<br/>);
        prof_arr_dummy_date.push(<br/>);


        prof_arr_dummy_name.push(<br/>);
        prof_arr_dummy_id.push(<br/>);
        /*prof_arr_dummy_image.push(<br/>);*/
        prof_arr_dummy_alert_type.push(<br/>);
        prof_arr_dummy_timestamp.push(<br/>);
        prof_arr_dummy_date.push(<br/>);







      }





    //  this.setState({professor_data: response['name']})
    // for(var i=0;i<response.data.length;i++)
    // {
    //  // prof_array[n]=response.data[n].name;   //pushing the names into an array, will do for each of the fields later.
    //   // str+=response.data[n].name
    //   console.log({professor_name: response.data[n].name });
    //   console.log({prof_alert_type: response.data[n].alert_type });
    //   console.log({prof_image: response.data[n].image });
    //   console.log({prof_id: response.data[n].id });
    //   console.log({prof_time_stamp: response.data[n].time_stamp });
    //
    //
    //
    // }

     this.setState({prof_arr_name: prof_arr_dummy_name })
     this.setState({prof_arr_id: prof_arr_dummy_id })
     this.setState({prof_arr_date: prof_arr_dummy_date })
     /*this.setState({prof_arr_image: prof_arr_dummy_image })*/
     this.setState({prof_arr_time_stamp: prof_arr_dummy_timestamp })
     this.setState({prof_arr_alert_type: prof_arr_dummy_alert_type })

     console.log(response.data.length);
     console.log(response.data);


     console.log(response.data[0])
     console.log("vichu")

     console.log(response.data)
     console.log(response.data)



      this.setState({prof_name: response.data[n].name })
      this.setState({prof_alert_type: response.data[n].alert_type})
      this.setState({prof_date: response.data[n].date})
      // {this.setState({prof_image: response.data[n].image })}
      this.setState({prof_id: response.data[n].id })
      this.setState({prof_time_stamp: response.data[n].time_stamp })



  //  this.setState({professor_data}, () => console.log(this.state.professor_data));



  }

  handleError(error){
    console.log(error)
  }
}

export default ConsoleComponent
