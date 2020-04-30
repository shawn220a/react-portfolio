import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Shawn Tschoepe</h1>
        <div>
          <Link to="/" className="nav-link" id="about">
            {' '}
            Home
            {' '}
          </Link>
        </div>
        <div>
          <Link to="/portfolio" className="nav-link" id="about">
            {' '}
            Portfolio
            {' '}
          </Link>
        </div>
        <div>
          <Link to="/contact" className="nav-link" id="about">
            {' '}
            Contact
            {' '}
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
