import React, {Component} from 'react';
import './Header.css';

const Header = ({state}) => { 
  const num_of_applicants = state.applications.length;
  const num_of_shortlisted = state.saved.length;
  console.log(num_of_shortlisted) 
    return(
  
        <div className="wrapper">
  <div className="box a">Total Applicants: 
    <h5>{num_of_applicants}</h5>
  </div>
  <div className="box b">Shortlisted Applicants
  <h5>{num_of_shortlisted}</h5>
  </div>
      </div>
)
}
export default Header;