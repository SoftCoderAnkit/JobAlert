// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Hire Alert</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse" // Updated for Bootstrap 5
        data-bs-target="#navbarNavAltMarkup" // Updated for Bootstrap 5
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/about">About Us</Link>
          <Link className="nav-item nav-link" to="/job">New Job</Link>
          <Link className="nav-item nav-link" to="/news">Latest News</Link>
          <Link className="nav-item nav-link" to="/ITI">ITI Job</Link>
          <Link className="nav-item nav-link" to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
