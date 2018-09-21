import React from 'react';
import Btn from '../Btn/Btn';

'./ShortlistedApplicants.css'


const ShortlistedApplicants = ({saved, onRemove}) => {
    return(
        <div className='shortlisted'><h1 className='shortlisted'>Shortlisted Applicants Page</h1>
       {saved.map((applicant) =>{
        return(
            <div className='applications'> <ul >
        <li  className='applicant-li' key={applicant.id}> 
        <div className='applicant'>
        <div><i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i></div>
        <div className='icon-div'><h5><strong>{applicant.name}</strong> {applicant.position}</h5>
        <h7>Years of Experience: {applicant.experience}</h7><br/>
        <h7>{applicant.questions[0].text}</h7> {applicant.questions[0].answer}
        </div>
          </div>
          <div className='btn'><button onClick={() => onRemove(applicant)}>X</button></div></li></ul> </div>
        )
    })}
        </div>
    )
}

export default ShortlistedApplicants;