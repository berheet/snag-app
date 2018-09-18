import React, {Component} from 'react';
import './Header.css';

const Header = () => (
        <div className="wrapper">
  <div className="box a">Number of Applicants: 
    <h5>5</h5>
  </div>
  <div className="box b">Number of Shortlisted Applicants
  <h5>3</h5>
  </div>
  <a href='#'><div className="box c">C</div></a>
        </div>
)

export default Header;