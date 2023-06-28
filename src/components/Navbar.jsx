import React from "react";

const Navbar = () => {
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
        <h3>-</h3>
        <h3>-</h3>
        <h3>-</h3>
      </div>
    </div>
  );
};

export default Navbar;
