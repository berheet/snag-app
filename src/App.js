import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/Sidebar';
import Btn from './components/Btn/Btn';
import ShortlistedApplicants from './components/ShortlistedApplicants/ShortlistedApplicants';

class App extends Component {
  constructor(){
    super()

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
          "id":4, "name":"Clay vanSchalkwijk", "position":"Cook", "applied":"03/08/16", "experience":1, "availability":{
          "M":1, "T":0, "W":1, "Th":0, "F":1, "S":0, "Su":0 }, "questions":[
          {
          "text":"Are you authorized to work in the United States?", "answer":"Yes" } ] }
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

  render() {
    const { applications, saved, searchField, positions } = this.state;

    //will be used to search by position 
    const filteredApplicants = applications.filter(application => {
      return application.position.toLowerCase().includes(searchField.toLowerCase());
    })

    //this can be used if you want to search by name instead of position
    // const filterByName = applications.filter(application => {
    //   return application.name.toLowerCase().includes(searchField.toLowerCase());
    // })

    const filterThroughApp = filteredApplicants.map((applicant) => {
      return(
      <div className='applications'> <ul >
        <li  className='applicant-li' key={applicant.id}> 
        <div className='applicant'>
        <div><i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i></div>
        <div className='icon-div'><h5><strong>{applicant.name}</strong> {applicant.position}</h5>
        <h7>Years of Experience: {applicant.experience}</h7><br/>
        <h7>{applicant.questions[0].text}</h7> {applicant.questions[0].answer}<br/>
        <h7>Availability: M:{applicant.availability.M}, 
        T:{applicant.availability.T},
        W:{applicant.availability.W},
        Th:{applicant.availability.Th},
        F:{applicant.availability.F},
        S:{applicant.availability.S},
        Su:{applicant.availability.Su},
        </h7>
        </div>
          </div>
          <div className='btn'>Application Recieved On: {applicant.applied}<br/>
          <Btn style={{marginLeft:'99%'}} onFavorite={() => this.onFavorite(applicant)} shortlist={saved.includes(applicant)} /></div></li></ul> </div>
      )
      })

    return (
      <div className="App">
      <Sidebar/>
      <Search searchChange={this.onSearchChange}/>
      <Header state={this.state} searchChange={this.onSearchChange} />
      {filterThroughApp} 
      <hr style={{borderTop:"black 5px solid"}}/>
      <ShortlistedApplicants saved={saved} onRemove={this.onRemove}/>
      </div>
    );
  }
}

export default App;