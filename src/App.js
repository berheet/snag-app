import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/Sidebar';
import Btn from './components/Btn/Btn';
import ShortlistedApplicants from './components/ShortlistedApplicants/ShortlistedApplicants';
import Applications from './components/Applications/Applications';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PieChart from './components/PieChart/PieChart';

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
        "id":4, "name":"Clay van Schalkwijk", "position":"Cook", "applied":"03/08/16", "experience":1, "availability":{
        "M":1, "T":0, "W":1, "Th":0, "F":1, "S":0, "Su":0 }, "questions":[
        {
        "text":"Are you authorized to work in the United States?", "answer":"Yes" } ] }
        ],
        searchField:'',
        saved:[],
        direction: {
          name:'asc',
          position:'asc',
          experience: 'asc',
        }
    }
    this.sortBy = this.sortBy.bind(this)
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
  sortBy(key) {
    this.setState({
      applications: this.state.applications.sort( (a, b) => (
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key]) 
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }
  render() {
    // const { applications, saved, searchField, positions } = this.state;

    //will be used to search by position 
    // const filteredApplicants = applications.filter(application => {
    //   return application.position.toLowerCase().includes(searchField.toLowerCase());
    // })

    //this can be used if you want to search by name instead of position
    // const filterByName = applications.filter(application => {
    //   return application.name.toLowerCase().includes(searchField.toLowerCase());
    // })

    // const filterThroughApp = filteredApplicants.map((applicant) => {
    //   return(
    //   <div className='applicant-li'>
    //     <i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
    //     <div key={applicant.id} className='applicant-info-div'><h5><strong>{applicant.name}</strong> {applicant.position}</h5>
    //     <h7>Years of Experience: {applicant.experience}</h7><br/>
    //     <h7>{applicant.questions[0].text}</h7> {applicant.questions[0].answer}<br/>
    //     <h7>Availability: M:{applicant.availability.M}, 
    //     T:{applicant.availability.T},
    //     W:{applicant.availability.W},
    //     Th:{applicant.availability.Th},
    //     F:{applicant.availability.F},
    //     S:{applicant.availability.S},
    //     Su:{applicant.availability.Su},
    //     </h7>
    //     </div>
    //                <div className='button-div'>Application Recieved On: {applicant.applied}<br/>
    //       <Btn style={{marginLeft:'99%'}} onFavorite={() => this.onFavorite(applicant)} shortlist={saved.includes(applicant)} /></div> </div>
    //   )
    //   })

    return (
      <BrowserRouter>
      <div className='main'>
      <Sidebar/>
      <div className="App">
      <Search searchChange={this.onSearchChange}/>
      </div>
      {/* <Applications props={this.state}/> */}
      <Switch>
        
        <Route exact path='/' render={()=> <Applications applications={this.state.applications} saved={this.state.saved} onRemove={this.onRemove} onFavorite={this.onFavorite} sortBy={this.sortBy}/>} />
        <Route path='/shortlistedApplicants' render={()=> <ShortlistedApplicants saved={this.state.saved} onRemove={this.onRemove} />}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;