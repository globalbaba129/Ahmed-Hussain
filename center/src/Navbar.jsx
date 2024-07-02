import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CenterImage from './logo/center.png';


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "blue" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          <img src={CenterImage} width={80} height={80} alt="" />
        </Link>
        <button className="navbar-toggler bg-light" type="button" onClick={handleToggleMobileMenu}>
          <span className="navbar-toggler-icon " />
        </button>
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/card">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Contact">Contact</Link>
            </li>
           
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
