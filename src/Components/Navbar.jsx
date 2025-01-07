import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-user" className="nav-link">Add User</Link>
            </li>
            <li className="nav-item">
              <Link to="/all-users" className="nav-link">All Users</Link>
            </li>
            <li className="nav-item">
              <Link to="/faqs" className="nav-link">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
