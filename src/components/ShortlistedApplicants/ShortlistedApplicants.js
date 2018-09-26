import React from 'react';
import Search from '../Search/Search'
'./ShortlistedApplicants.css'


const ShortlistedApplicants = (props) => {
    let applicants;
    const {saved, onRemove, sortByName,sortByPosition,sortByExp, sortByQuestion} = props;
    if(saved == 0) {
        return(
            applicants = <div style={{textAlign:'center'}}><h1 className='shortlisted'>Shortlisted Applicants Page</h1>Nothing to Show</div>
        )
    }
    if(saved){
        return(
            <div style={{textAlign:'center'}}>
            <h1 className='shortlisted'>Shortlisted Applicants Page</h1>
            <table className='app-table'>
                       <tr>
                    <th onClick={() => sortByName('name')}>Name</th>
                    <th onClick={() => sortByPosition('position')}>Position</th>
                    <th onClick={() => sortByExp('experience')}>Exp.</th>
                    <th onClick={()=> sortByQuestion('answer')}>Question</th>
                    <th>Availability</th>
                    <th onClick={() => sortByExp('applied')}>Applied</th>
                    <th><Search/></th>
                    <th></th>
                    </tr>
                    {saved.map((app) => {
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
     <td><button onClick={() => onRemove(app)}>X</button></td>
                        </tr> )})}
                    </table>
                    </div>
        )
    }
      return(
        <div className='shortlisted'><h1 className='shortlisted'>Shortlisted Applicants Page</h1>
              <hr style={{borderTop:"black 5px solid"}}/>
              {applicants}
        </div>
    )
}

export default ShortlistedApplicants;