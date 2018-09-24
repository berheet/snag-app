import React from 'react';
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
  <a class="s-sidebar__trigger" href="#0">
     <i class="fa fa-bars"></i>
  </a>

  <nav class="s-sidebar__nav">
     <ul>
     {/* <li>
           <a class="s-sidebar__nav-link" href="#0">
           <img src='http://linhartpr.com/wp-content/uploads/2015/01/Snagajob.png'/>
           </a>
        </li> */}
        <li>
           <a class="s-sidebar__nav-link" href="#0">
              <i class="fa fa-home"></i>
           </a>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
             <i class="fa fa-user"></i>
           </a>
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