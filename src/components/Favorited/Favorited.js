import React from 'react';
import './Favorited.css'

const Favorited =(props) => {
    console.log(props.saved)
    const saved_applications = props.saved.map((applicant) =>{
        return(
            <div className='favorited'><ul> 
                <li> <h5>{applicant.name}</h5></li>
                </ul>
                </div>
        )
    })
    return(
        <div className='favorited'>
        <h1>Favorited List</h1>
        {props.saved.map((applicant) => {
            return (  <div className='favorited'><ul> 
            <li> <h5>{applicant.name}</h5></li>
            </ul>
            </div>)
        })}
        </div>

    )
}
export default Favorited;