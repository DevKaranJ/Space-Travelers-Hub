import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
       <div className="logo">
        <img src="" alt="Logo" />
        <span>Space Travelers' Hub</span>
      </div>
      <ul>
        <li>
          <NavLink to="/rockets" activeClassName="active">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions" activeClassName="active">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/dragons" activeClassName="active">Dragons</NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" activeClassName="active">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
