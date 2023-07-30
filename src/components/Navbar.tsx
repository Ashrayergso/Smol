import React from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/crews" className="nav-link">Crews</Link>
      <Link to="/ships" className="nav-link">Ships</Link>
      <Link to="/assignments" className="nav-link">Assignments</Link>
      <Link to="/analytics" className="nav-link">Analytics</Link>
      <Link to="/profile" className="nav-link">Profile</Link>
    </nav>
  );
};

export default Navbar;