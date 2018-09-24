import React, {Component} from 'react';
import './Applications.css'
import Btn from '../Btn/Btn'
import ShortlistedApplicants from '../ShortlistedApplicants/ShortlistedApplicants';
import Header from '../Header/Header';

class Applications extends Component{
    constructor(props){
        super(props)

        this.state = {
            applications: [{
              "id":1, "name":"John Smith", "position":"Server", "applied":"03/15/16", "experience":2, "availability":{
              "M":2, "T":2, "W":1, "Th":2, "F":1, "S":0,
              "Su":0 }, "questions":[
              {
              "text":"Have you ever been convicted of a felony?", "answer":"No" } ] }, 
              {
              "id":2, "name":"Jane Smith", "position":"Cook", "applied":"02/08/16", "experience":4, "availability":{
              "M":1, "T":1, "W":1, "Th":1, "F":0, "S":0, "Su":0 }, "questions":[
              {
              "text":"Have you ever been convicted of a felony?", "answer":"Yes" } ] }, 
              {
              "id":3, "name":"David Jessup", "position":"Chef", "applied":"03/08/16", "experience":2, "availability":{
              "M":2, "T":2, "W":2, "Th":2, "F":2,
              "S":0, "Su":0 }, "questions":[
              {
              "text":"Are you authorized to work in the United States?", "answer":"Yes" } ] }, 
              {
              "id":4, "name":"Clay van Schalkwijk", "position":"Cook", "applied":"03/08/16", "experience":1, "availability":{
              "M":1, "T":0, "W":1, "Th":0, "F":1, "S":0, "Su":0 }, "questions":[
              {
              "text":"Are you authorized to work in the United States?", "answer":"Yes" } ] },
              ],
              searchField:'',
              saved:[],
          }
        }
    onFavorite = applicant => {
      const { saved } = this.state; 
      const index = saved.indexOf(applicant);
    
      if(index === -1) {
       this.setState({
        saved: [...saved, applicant],
       })
       
      } else {
        saved.splice(index, 1);
        this.setState({saved});
      }
    }
    onSearchChange = (event) => {
      this.setState({
        searchField:event.target.value
      })
    }
    
    onRemove = applicant => {
      const {saved} = this.state;
      saved.splice(saved.indexOf(applicant), 1);
      this.setState({
        saved
      })
    }
    render(){
           return(
            <div>
                <Header state={this.state} searchChange={this.onSearchChange}/>
           <table className='app-table'>
                       <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Exp.</th>
                    <th>Question</th>
                    <th>Availability</th>
                    <th></th>
                    <th></th>
                    </tr>
                    {this.state.applications.map((app) => {
                        return(
                            <tr>
                            <td>{app.name}</td>
                         <td>{app.position}</td>
                         <td>{app.experience}</td>
                         <td>{app.questions[0].text} 
                         <p>
                         {app.questions[0].answer} </p>
                         </td>
                         <td><strong>M:</strong>{app.availability.M}, 
             <strong>T:</strong> {app.availability.T},
             <strong>W:</strong> {app.availability.W},
             <strong>Th:</strong> {app.availability.Th},
             <strong>F:</strong> {app.availability.F},
             <strong>S:</strong> {app.availability.S},
             <strong>Su:</strong> {app.availability.Su}</td>
     <td>Applied On: {app.applied}</td>
     <td><Btn onFavorite={() => this.onFavorite(app)} shortlist={this.state.saved.includes(app)}/></td>
                        </tr> )})}
                    </table>
           <ShortlistedApplicants saved={this.state.saved} onRemove={this.onRemove}/>
           </div>
        )
    }
}

export default Applications;