import CLoseMenuIcon from "../assets/icons/CloseMenuIcon";
import FaceBook from "../assets/icons/FaceBook";
import Linkedin from "../assets/icons/Linkedin";
import MenuIcon from "../assets/icons/MenuIcon";
// import React, { useState } from "react";
import Twitter from "../assets/icons/Twitter";

function Header({ open, setOpen }) {
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__left">
            <div className="header__logo">
              <img src="/public/Logo.png" alt="Logo" />
            </div>
            <nav className="header__nav">
              <a href="#" className="header__nav-links">
                Services
              </a>
              <a href="#" className="header__nav-links">
                About
              </a>
              <a href="#" className="header__nav-links">
                Articles
              </a>
              <a href="#" className="header__nav-links">
                Contact
              </a>
            </nav>
          </div>
          <div className="header__right">
            <a href="tel/(123) 456-7890" className="header__tel">
              (123) 456-7890
            </a>
            <button className="header__button">Request Consultation</button>
          </div>
          <button className="header__menu" onClick={toggleMenu}>
            {open ? <CLoseMenuIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`header__open-menu ${open ? "open" : ""}`}>
        <div className={`bg ${open ? "open" : ""}`}></div>
        <div className={`menu__wrap ${open ? "open" : ""}`}>
          <nav className="header__mobile-nav">
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Articles</a>
            <a href="#">Contact</a>
          </nav>

          <div className="menu__button">
            <a href="tel/(123) 456-7890">(123) 456-7890</a>
            <button>Request Consultation</button>
          </div>

          <div className="menu__bottom">
            <div className="menu__abouts">
              <p>2972 Westheimer Road</p>
              <p>Denver, CO 80021</p>
              <a href="tel: (720) 555-0123">(720) 555-0123</a>
              <a href="mailto:info.denver@mckinley.com">
                info.denver@mckinley.com
              </a>
            </div>
            <nav className="menu__links">
              <a href="https://www.facebook.com/">
                <FaceBook />
                Facebook
              </a>
              <a href="https://www.linkedin.com/login">
                <Linkedin />
                Linkedin
              </a>
              <a href="https://x.com/login">
                <Twitter />
                Twitter
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
