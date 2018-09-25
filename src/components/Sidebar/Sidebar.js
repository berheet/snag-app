import React from 'react';
import {Link} from 'react-router-dom'
import './Sidebar.css';

// const Sidebar = () => (
// <div className="sidenav">
// <div className='snag-div'><img src='https://www.snagajob.com/images/snag_shareable.png'/></div>
// <ul className="fa-ul">
//   <li><i class="fa fa-home fa-3x" aria-hidden="true"></i><p>Dashboard</p></li>
//   <hr />
//   <li><i class="fa fa-briefcase fa-3x" aria-hidden="true"></i><p>Shortlisted Applicants</p></li>
//   <hr />  
//   <li><i class="fa fa-cogs fa-3x" aria-hidden="true"></i><p>Settings</p></li>
//   <hr />
// </ul>
// </div>
// )

const Sidebar = () => (
  <div class="s-layout">
<div class="s-layout__sidebar">
  <Link to='/' class="s-sidebar__trigger" href="#0">
     <i class="fa fa-bars"></i>
  </Link>

  <nav class="s-sidebar__nav">
     <ul>
            <li>
           <Link exact to='/' class="s-sidebar__nav-link" href="#0">
              <i class="fa fa-home"></i>
           </Link>
        </li>
        <li>
           <Link to='/shortlistedApplicants' class="s-sidebar__nav-link" href="#0">
             <i class="fa fa-user"></i>
           </Link>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
              <i class="fa fa-cogs fa-1x" aria-hidden="true"></i>
           </a>
        </li>
     </ul>
  </nav>
</div>

</div>
)

export default Sidebar;