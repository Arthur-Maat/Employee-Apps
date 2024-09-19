// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
      
        <li><Link to="/add-employee">Add Employee List</Link></li>
        <li><Link to="/employee-list">Database</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
