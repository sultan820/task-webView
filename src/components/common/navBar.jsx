import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
      <Link className="navbar-brand" to="/owners">
        Pet House
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/owners">
              Owners
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/pets">
              Pets
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
