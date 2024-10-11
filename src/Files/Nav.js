import React from 'react'
import "./name.css";

const NavBar = () => {

  const navItems = ['home','ltps','expected-percentage', 'attendence' , 'take-a-leave' ];
      
      const ButtonHandler = ()=>{

        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
         //Animate Links
          navLinks.classList.toggle("open");
          links.forEach(link => {
              link.classList.toggle("fade");
          });
      
          //Hamburger Animation
          hamburger.classList.toggle("toggle");
};

  return (
    <nav className='myNavBar'>
    {/* <div class="logo">
        <img src="logo.svg" alt="Logo Image" />
    </div> */}
    <div class="hamburger" onClick={ButtonHandler}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
    <ul class="nav-links">
          {navItems?.map(item =>(
                <li  key={item}> <a href= {item}>{item?.toUpperCase()}</a></li>
            ))}
    </ul>
</nav>
  )
}

export default NavBar
