import React from 'react';
import Btn from '../Btn/Btn';
'./ShortlistedApplicants.css'


const ShortlistedApplicants = ({saved, onRemove}) => {
    let applicants;

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
                    <th onClick={() => this.props.sortBy('name')}>Name</th>
                    <th onClick={() => this.props.sortBy('position')}>Position</th>
                    <th onClick={() => this.props.sortBy('experience')}>Exp.</th>
                    <th>Question</th>
                    <th>Availability</th>
                    <th>Applied</th>
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
    // if(saved == 0){
    //     return(
    //     applicants = <div>Nothing to Show</div>
    //     )} 
    //     if(saved) {
    //         applicants = saved.map((app) => {
    //             return(
    //                 <table className='app-table'>
    //                 <tr>
    //                     <th>Name</th>
    //                     <th>Name</th>
    //                     <th>Name</th>
    //                     <th>Name</th>
    //                     <th>Name</th>
    //                     <th>Name</th>
    //                     <th>Name</th>
    //                     </tr>
    //                    <tr>
    //                        <td>{app.name}</td>
    //                     <td>{app.position}</td>
    //                     <td>{app.experience}</td>
    //                     <td>{app.questions[0].text}
    //                     {app.questions[0].answer}
    //                     </td>
    //                     <td>M:{app.availability.M}, 
    //         T:{app.availability.T},
    //         W:{app.availability.W},
    //         Th:{app.availability.Th},
    //         F:{app.availability.F},
    //         S:{app.availability.S},
    //         Su:{app.availability.Su}</td>
    // <td>Applied On: {app.applied}</td>
    // <td><button onClick={() => onRemove(app)}>X</button></td>
    //                 </tr>
    //                 </table>
    //             )
    //         })
        
    // }
    return(
        <div className='shortlisted'><h1 className='shortlisted'>Shortlisted Applicants Page</h1>
              <hr style={{borderTop:"black 5px solid"}}/>
              {applicants}
        </div>
    )
}

export default ShortlistedApplicants;