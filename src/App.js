import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/Sidebar';
import Btn from './components/Btn/Btn';
import ShortlistedApplicants from './components/ShortlistedApplicants/ShortlistedApplicants';
import Applications from './components/Applications/Applications';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Settings from './components/Settings/Settings';

class App extends Component {
  constructor(){
    super()

    
    this.state = {
      applications: [{"id":1,"name":"Edin Lafrentz","position":"Office Assistant III","experience":1,"applied":"10/25/2017", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":2,"name":"Lil Nesey","position":"Biostatistician I","experience":1,"applied":"2/27/2018", "availability":{
        "M":3,
        "T":2,
        "W":1,
        "Th":1,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"Yes"
        }
        ]},
      {"id":3,"name":"Osbert Bourke","position":"Payment Adjustment Coordinator","experience":5,"applied":"4/22/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"Yes"
        }
        ]},
      {"id":4,"name":"Torey Riediger","position":"Staff Accountant II","experience":4,"applied":"8/25/2017", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":5,"name":"Evelin Kindread","position":"Marketing Assistant","experience":4,"applied":"10/10/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":6,"name":"Gan Scorton","position":"Quality Engineer","experience":4,"applied":"6/23/2017", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":7,"name":"Gray O'Bradden","position":"GIS Technical Architect","experience":1,"applied":"2/11/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":8,"name":"Emmalee Stannett","position":"Administrative Officer","experience":1,"applied":"12/11/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":9,"name":"Xaviera Forrington","position":"Sales Associate","experience":5,"applied":"10/22/2017", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":10,"name":"Silvan Nisuis","position":"Senior Sales Associate","experience":5,"applied":"12/1/2017", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"Yes"
        }
        ]},
      {"id":11,"name":"Hayward Lusty","position":"Nurse Practicioner","experience":3,"applied":"3/5/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"Yes"
        }
        ]},
      {"id":12,"name":"Tades Rowles","position":"Human Resources Assistant I","experience":3,"applied":"9/2/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":13,"name":"Olin Morillas","position":"Senior Quality Engineer","experience":2,"applied":"10/17/2017", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":14,"name":"Moira Halpeine","position":"Research Assistant I","experience":2,"applied":"4/13/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":15,"name":"Delmer De Ath","position":"Senior Sales Associate","experience":5,"applied":"1/4/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":16,"name":"Kaitlynn Shildrake","position":"Account Coordinator","experience":2,"applied":"10/7/2017", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":17,"name":"Britte Boulter","position":"Product Engineer","experience":4,"applied":"9/20/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":18,"name":"Anita Reddick","position":"VP Accounting","experience":2,"applied":"5/8/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":19,"name":"Hewe Gatrell","position":"Payment Adjustment Coordinator","experience":1,"applied":"11/14/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":20,"name":"Trev Yewen","position":"Office Assistant I","experience":1,"applied":"8/27/2017", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":21,"name":"Alley Fillimore","position":"Actuary","experience":5,"applied":"8/27/2017", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":22,"name":"Eba Raggatt","position":"Geological Engineer","experience":5,"applied":"5/23/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":23,"name":"Lila Woolmer","position":"VP Quality Control","experience":2,"applied":"8/25/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":24,"name":"Hugh Pohlke","position":"VP Accounting","experience":2,"applied":"8/26/2018", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]},
      {"id":25,"name":"Golda Wimpeney","position":"Research Associate","experience":4,"applied":"12/1/2017", "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        
        "Su":0
        },
        "questions":[
        {
        "text":"Have you ever been convicted of a felony?",
        "answer":"No"
        }
        ]}],
        searchField:'',
        saved:[],
        direction: {
          name:'asc',
          position:'asc',
        }
    }
    // this.sortBy = this.sortBy.bind(this)
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
    const {applications, searchField} = this.state;
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
  sortByName = (key) =>(
    this.setState({
      applications: this.state.applications.sort((a, b) => a.name.localeCompare(b.name)),
      direction: {
        name: !this.state.direction.name
      }
    })
  )
  sortByPosition = (key) =>(
    this.setState({
      applications: this.state.applications.sort((a, b) => a.position.localeCompare(b.position)),
      direction: {
        position: !this.state.direction.position
      }
    })
  )
  sortByQuestion = (key) =>(
    this.setState({
      applications: this.state.applications.sort((a, b) => a.questions[0].answer.localeCompare(b.questions[0].answer)),
      // direction: {
      //   position: !this.state.direction.questions[0].
      // }
    })
  )
  sortByExp = (key) => (
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
  )
  sortByApplied = (key) => (
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
  )
  render() {
    console.log(this.state.applications)
    console.log(this.state.direction.name)
    const { applications, saved, searchField, positions } = this.state;

    //will be used to search by position 
    const filteredApplicants = applications.filter(application => {
      return application.position.toLowerCase().includes(searchField.toLowerCase());
    })

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
      <div className="app">
      <Switch>
        
        <Route exact path='/' render={()=> <Applications applications={this.state.applications} saved={this.state.saved} onRemove={this.onRemove} onFavorite={this.onFavorite} sortByName={this.sortByName} sortByPosition={this.sortByPosition} sortByExp={this.sortByExp} sortByQuestion={this.sortByQuestion}/>} onSearchChange={this.onSearchChange}/>
        <Route path='/shortlistedApplicants' render={()=> <ShortlistedApplicants saved={this.state.saved} onRemove={this.onRemove} />}/>
        <Route path='/settings' component={Settings} />
        </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;