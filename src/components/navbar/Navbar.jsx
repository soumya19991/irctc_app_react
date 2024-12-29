import React from "react";
import "../navbar/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <h1>IRCTC</h1>
        <ul>
          <li>
            <a href="/home" title="Go to Home">
              Home
            </a>
          </li>
          <li>
            <a href="/login" title="Go to Login">
              Login
            </a>
          </li>
          <li>
            <a href="/register" title="Go to Register">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
