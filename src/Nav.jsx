import React from "react";
import './Nav.css';
const Nav=()=>{
    return(
   <div className="nav">
    <div className="nav-logo">
        <img src="/images/brand_logo.png" alt="logo"></img>
    </div>
    <div className="nav-item">
      <a href="">MENU</a>
      <a href="">LOCATION</a>
      <a href="">ABOUT</a>
      <a href="">CONTACT</a>
    </div>
    <div className="nav-btn">
    <button class="my-button" onclick="handleButtonClick()">Login</button>

    </div>
   </div>
    )
}

export default Nav;