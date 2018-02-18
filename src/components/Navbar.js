import React from 'react';
import Link from 'gatsby-link';

import background from '../img/header-bg.jpg';
import logo from '../img/rave-reviewz-logo.png';

const Navbar = () => (
  <nav
    className="navbar is-transparent"
    style={{
      backgroundImage: `url(${background})`,
    }}
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img
              src={logo}
              alt="Rave Reviewz"
              style={{ width: '188px', height: '40px', maxHeight: '100px' }}
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-start" />
      <div className="navbar-end">
        <Link className="navbar-item" to="/about-us">
          About Us
        </Link>
        <Link className="navbar-item" to="/reviews">
          Reviews
        </Link>
        <Link className="navbar-item" to="/interviews">
          Interviews
        </Link>
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
);

export default Navbar;
