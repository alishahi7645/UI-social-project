import React from 'react';
import {AiOutlineBars} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'
import {SiAnaconda} from 'react-icons/si'
import './Navbar.css'
const Navbar = () => {
  return(
    <nav className="navbar container">
      <div className="menu">
        <ul className='nav-link'>
          <li><a href="">آموزش بیشتر</a></li>
          <li><a href="">خانه</a></li>
          <li><a href="">امکانات</a></li>
          <li><a href="">دانلود</a></li>
          <li><a href="">مشترک شوید</a></li>
        </ul>
      </div>
      <div className="logo">
        <SiAnaconda color='#fff' size={30}/>
        <p className="logo-text">
          social
          <span>X</span>
        </p>
      </div>
    </nav>
  )
};

export default Navbar;
