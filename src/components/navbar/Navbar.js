import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import "./Navbar.css";
const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const togglemenu = () => {
    setShowIcon(!showIcon);
  };
  return (
    <nav className="navbar container">
      <div className="menu">
        <ul
          className="nav-link"
          id={showIcon ? "show-links-mobile" : "show-links-mobile-hide"}
        >
          <li>
            <a href="" className="btn btn-dark">
              آموزش بیشتر
            </a>
          </li>
          <li>
            <a href="#header">خانه</a>
          </li>
          <li>
            <a href="#features">امکانات</a>
          </li>
          <li>
            <a href="#download">دانلود</a>
          </li>
          <li>
            <a href="#subscribe">مشترک شوید</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <SiAnaconda color="#fff" size={30} />
        <p className="logo-text">
          social
          <span>X</span>
        </p>
      </div>
      <div className="menu-icon" onClick={togglemenu}>
        {showIcon ? (
          <RiCloseLine cursor={"pointer"} size={35} color="#fff" />
        ) : (
          <AiOutlineBars size={35} color="#fff" cursor={"pointer"} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
