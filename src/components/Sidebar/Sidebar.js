import React from 'react';
import {Link} from 'react-router-dom'
import './Sidebar.css';

const Sidebar = () => (
  <div class="s-layout">
<div class="s-layout__sidebar">
  <Link to='/' class="s-sidebar__trigger" href="#0">
     <i class="fa fa-bars"></i>
  </Link>

  <nav class="s-sidebar__nav">
     <ul >
     <li> <a href='https://www.snagajob.com/' target='blank' >
           <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Gothic_s.svg/2000px-Gothic_s.svg.png'/>
    </a>
</li>
            <li>
           <Link exact to='/' class="s-sidebar__nav-link" href="#0">
              <i className="fa fa-home"></i>
           </Link>
        </li>
        <li>
           <Link to='/shortlistedApplicants' class="s-sidebar__nav-link" href="#0">
             <i class="fa fa-user"></i>
           </Link>
        </li>
        <li>
           <Link to='/settings' class="s-sidebar__nav-link" href="#0">
              <i class="fa fa-cogs fa-1x" aria-hidden="true"></i>
           </Link>
        </li>
     </ul>
  </nav>
</div>

</div>
)

export default Sidebar;