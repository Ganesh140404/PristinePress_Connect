import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      
      <ul>
        
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Service">Services</Link></li>
        <li className="dropdown">
          <Link to="#" className="dropbtn">My Account</Link>
          <div className="dropdown-content">
            <Link to="/Profile">Profile</Link>
            <Link to="/MyOrders">My Orders</Link>
            <Link to="/membership">My Memberships</Link>
            <Link to="/">Logout</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
