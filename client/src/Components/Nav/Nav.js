import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => (


    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li class="menu-text">Researcher</li>
          <li>
            <ul className="menu Horizantal">
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/Profile">Profile</Link></li>
              <li><Link className="nav-link" to="/Signup">Sign up</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
 
);

export default Navbar;