import React from 'react';
import Btn from '../Btn/Btn';
'./ShortlistedApplicants.css'


const ShortlistedApplicants = ({saved, onRemove}) => {
    return(
        <div className='shortlisted'><h1 className='shortlisted'>Shortlisted Applicants Page</h1>
              <hr style={{borderTop:"black 5px solid"}}/>
        {saved.map((app) => {
            return(
                <table className='app-table'>
                <tr>
                    <th>Name</th>
                    <th>Name</th>
                    <th>Name</th>
                    <th>Name</th>
                    <th>Name</th>
                    <th>Name</th>
                    <th>Name</th>
                    </tr>
                   <tr>
                       <td>{app.name}</td>
                    <td>{app.position}</td>
                    <td>{app.experience}</td>
                    <td>{app.questions[0].text}
                    {app.questions[0].answer}
                    </td>
                    <td>M:{app.availability.M}, 
        T:{app.availability.T},
        W:{app.availability.W},
        Th:{app.availability.Th},
        F:{app.availability.F},
        S:{app.availability.S},
        Su:{app.availability.Su}</td>
<td>Applied On: {app.applied}</td>
<td><button onClick={() => onRemove(app)}>X</button></td>
                </tr>
                </table>
            )
        })}
        </div>
    )
}

export default ShortlistedApplicants;