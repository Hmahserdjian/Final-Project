import React from "react";
// import { Link } from "react-router-dom";


const Navbar = () => (


    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li class="menu-text">Researcher</li>
          <li>
            <ul className="menu Horizantal">
              <li><a href="/">Home</a></li>
              <li><a href="/Profile">Profile</a></li>
              <li><a href="/Signup">Sign up</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
 
);

export default Navbar;