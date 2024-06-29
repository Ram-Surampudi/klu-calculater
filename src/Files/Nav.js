import React, { useMemo } from 'react'


import './css/Nav.css';

const Nav = () => {
  
  const navItems = ['home','ltps','expected-percentage', 'attendence' , 'take-a-leave' ]

  return (
    <div>
          <nav>
      <div className="nav__bar">
        <div className="nav__header">
          <div className="logo nav__logo">
            <div>C</div>
            <span>KL<br />UNIVERSITY</span>
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <ul className="nav__links" id="nav-links">
            {navItems?.map(item =>(
                <li  key={item}> <a href= {item}>{item?.toUpperCase()}</a></li>
            ))}
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Nav;
