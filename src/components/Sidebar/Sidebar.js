import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';


const Sidebar = () => (
<div className="sidenav">
<div className='snag-div'><img src='https://www.snagajob.com/images/snag_shareable.png'/></div>
<ul className="fa-ul">
  <li><i class="fa fa-home fa-3x" aria-hidden="true"></i><p>Dashboard</p></li>
  <hr />
  <li><i class="fa fa-briefcase fa-3x" aria-hidden="true"></i><p>Shortlisted Applicants</p></li>
  <hr />  
  <li><i class="fa fa-cogs fa-3x" aria-hidden="true"></i><p>Settings</p></li>
  <hr />
</ul>
</div>
)
export default Sidebar;