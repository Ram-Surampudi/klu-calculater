import React, { useState } from 'react'
import "./name.css";
import $ from 'jquery';

const NavBar = () => {

  const navItems = ['home','ltps','expected-percentage', 'attendence' , 'take-a-leave' ];
  
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
   if(isActive)
    $('.div').css('margin-top', '10px');
    else 
    $('.div').css('margin-top', '170px');
  }

  return (
   <div>
        <div class="responsive-bar">
        <div class="menu">
        <h4 onClick={toggleMenu}>Menu</h4>
        </div>
    </div>
    <nav className='black'>
    <ul className={isActive ? 'active' : ''}>
          {navItems.map((e)=>(
            <li><a href= {'/'+e}>{e.toUpperCase()}</a></li>
          ))}
            </ul>
        </nav>
   </div>
  )
}

export default NavBar
