import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    
  };

  return (
    <div className="navbar">
      <div className="logopart">
        <h1>LOREMCOIN</h1>
      </div>
      <div className="navmenu">
        <h2>Licence</h2>
        <h2>About us</h2>
        <h2>How to start</h2>
        <h2 id="joinus">Join us</h2>
      </div>

      <div className="hamburger">
        <h3>Logo</h3>
        <nav ref={navRef}>
          <a href="">Home</a>
          <a href="">Licence</a>
          <a href="">How to start</a>
          <a href="">Join us</a>
          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </nav>
        <button onClick={showNavbar} className="nav-btn">
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
