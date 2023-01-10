import React from 'react'
import './Navbar.css'
import {NavLink, Link} from "react-router-dom";

const Navbar = () => {
  return (
 
    <div className='container-fluid nav_bg'>
    <div className='row'>
      <div className='col-10 mx-auto'>
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home"><span><svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.55542 15.3291C0.55542 6.87494 7.40887 0.0214844 15.863 0.0214844V0.0214844V21.1671C15.863 29.6212 9.00958 36.4747 0.55542 36.4747V36.4747V15.3291Z" fill="#35B879"/>
<path d="M18.084 8.33952C18.084 3.7456 21.8081 0.0214844 26.402 0.0214844V0.0214844C30.9959 0.0214844 34.72 3.74559 34.72 8.33952V8.81976C34.72 13.4137 30.9959 17.1378 26.402 17.1378V17.1378C21.8081 17.1378 18.084 13.4137 18.084 8.81976V8.33952Z" fill="#4CBFFF"/>
<path d="M18.084 27.6767C18.084 23.0828 21.8081 19.3586 26.402 19.3586V19.3586C30.9959 19.3586 34.72 23.0828 34.72 27.6767V28.1569C34.72 32.7508 30.9959 36.475 26.402 36.475V36.475C21.8081 36.475 18.084 32.7508 18.084 28.1569V27.6767Z" fill="#155AE1"/>
</svg>
</span> LOGO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav nav-list mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">2nd action</a></li>
            {/* <li><hr class="dropdown-divider"></li> */}
            <li><a class="dropdown-item" href="#">3rd Action</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
         <li class="nav-item">
          <a class="nav-link nav-btn" href="#"><div className='nav-btn-txt'>Login/Register</div></a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
    <hr className='line'/>
    </div>
    </div>
  )
}

export default Navbar
