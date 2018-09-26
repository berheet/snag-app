import React, {Component} from 'react';
import './Applications.css'
import Btn from '../Btn/Btn'
import ShortlistedApplicants from '../ShortlistedApplicants/ShortlistedApplicants';
import Header from '../Header/Header';
import Search from '../Search/Search';


class Applications extends Component{
    constructor(props){
        super(props)
        }
    render(){
      console.log(this.props)
      const {sortByName,sortByPosition,sortByExp, sortByQuestion, searchChange} = this.props;
           return(
               <div>
               <Header applicationLen={this.props.applications.length} saved={this.props.saved} searchChange={this.props.onSearchChange}/>
            <div className='scroll'>
           <table className='app-table'>
                       <tr>
                    <th onClick={() => sortByName('name')}>Name</th>
                    <th onClick={() => sortByPosition('position')}>Position</th>
                    <th onClick={() => sortByExp('experience')}>Exp.</th>
                    <th onClick={()=> sortByQuestion('answer')}>Question</th>
                    <th>Availability</th>
                    <th onClick={() => sortByExp('applied')}>Applied</th>
                    <th><Search/></th>
                    </tr>
                    {this.props.applications.map((app) => {
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
     <td>{app.applied}</td>
     <td ><Btn style={{zIndex:'-1'}} onFavorite={() => this.props.onFavorite(app)} shortlist={this.props.saved.includes(app)}/></td>
                        </tr> )})}
                    </table>
                    </div>
           </div>
        )
    }
}

export default Applications;