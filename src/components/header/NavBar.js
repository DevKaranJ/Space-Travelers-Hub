import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImage from '../../assets/images/planet.png';
import './NavBar.css';

const Navigation = () => {
  return (
    <nav className="header">
       <div className="logo">
        <img src={planetImage} alt="Logo" className="planet-img" />
        <span>Space Travelers' Hub</span>
      </div>
      <ul className="nav-container">
        <li className="nav-links">
          <NavLink to="/rockets" activeClassName="active">Rockets</NavLink>
        </li>
        <li className="nav-links">
          <NavLink to="/missions" activeClassName="active">Missions</NavLink>
        </li>
        <li className="nav-links">
          <NavLink to="/dragons" activeClassName="active">Dragons</NavLink>
        </li>
        <li className="nav-links">
          <NavLink to="/my-profile" activeClassName="active">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
