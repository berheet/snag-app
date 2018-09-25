import React, {Component} from 'react';
import './Applications.css'
import Btn from '../Btn/Btn'
import ShortlistedApplicants from '../ShortlistedApplicants/ShortlistedApplicants';
import Header from '../Header/Header';


class Applications extends Component{
    constructor(props){
        super(props)
        }
    render(){
      console.log(this.props)
           return(
               <div>
               <Header applicationLen={this.props.applications.length} saved={this.props.saved} searchChange={this.props.onSearchChange}/>
            <div className='scroll'>
           <table className='app-table'>
                       <tr>
                    <th onClick={() => this.props.sortBy('name')}>Name</th>
                    <th onClick={() => this.props.sortBy('position')}>Position</th>
                    <th onClick={() => this.props.sortBy('experience')}>Exp.</th>
                    <th>Question</th>
                    <th>Availability</th>
                    <th></th>
                    <th></th>
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
     <td>Applied On: {app.applied}</td>
     <td><Btn onFavorite={() => this.props.onFavorite(app)} shortlist={this.props.saved.includes(app)}/></td>
                        </tr> )})}
                    </table>
                    </div>
           </div>
        )
    }
}

export default Applications;