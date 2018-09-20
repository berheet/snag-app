import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Applications from './components/Applications/Applications'
import Favorited from './components/Favorited/Favorited';
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/Sidebar';
import { withRouter } from "react-router";
import routes from "./routes";
import Btn from './components/Btn/Btn';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


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
          positions:[],
      }
    }
    onFavorite = applicant => {
      const { saved } = this.state; 
    
      if(!saved.includes(applicant)) {
       this.setState({
        saved: [...saved, applicant],
       });
      }
    }
onSearchChange = (event) => {
  this.setState({
    searchField:event.target.value
  })
}

  render() {
    console.log(this.state.saved)
    console.log(this.state.searchField)
    console.log(this.state.positions)
    const { applications, saved, searchField, positions } = this.state;

    const filteredApplicants = applications.filter(application => {
      return application.name.toLowerCase().includes(searchField.toLowerCase());
    })

const removeApplicant = filteredApplicants.map((applicant) => {
  return(
    <div className='applications'> <ul >
    //       <li  className='applicant-li' key={applicant.id}> <h5>{applicant.name} - {applicant.position}</h5>
    //         <p></p>
    //         <button onClick={ () => this.onFavorite(applicant) }>Favorite</button>
    //       </li></ul> </div>
  )
})
      const saved_applications = saved.map((applicant) =>{
        return(
            <div className='favorited'><ul> 
                <li> <h5>{applicant.name}</h5></li>
                </ul>
                </div>
        )
    })

    return (
      <BrowserRouter>
      <div className="App">
      <Sidebar/>
      <Search searchChange={this.onSearchChange}/>
      <Header state={this.state} searchChange={this.onSearchChange} />
      {filteredApplicants.map((applicant) => {
return(<div className='applications'> <ul >
  <li  className='applicant-li' key={applicant.id}> <h5>{applicant.name} - {applicant.position}</h5>
    <p></p>
    <Btn onFavorite={() => this.onFavorite(applicant)} shortlist={saved.includes(applicant)} />
  </li></ul> </div>
)
})}
      {saved_applications}
      <Switch>
      <Route path="/fav" component={Favorited} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;