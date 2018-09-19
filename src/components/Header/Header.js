import React, {Component} from 'react';
import './Header.css';

const Header = ({state}) => { 
  const num_of_applicants = state.applications.length;
  const num_of_shortlisted = state.saved.length;
  console.log(num_of_shortlisted) 
    return(
  
        <div className="wrapper">
  <div className="box a">Number of Applicants: 
    <h5>{num_of_applicants}</h5>
  </div>
  <div className="box b">Number of Shortlisted Applicants
  <h5>{num_of_shortlisted}</h5>
  </div>
  <a href='#'><div className="box c">C</div></a>
        </div>
)
}
export default Header;