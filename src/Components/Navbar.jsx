import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { userActions } from "../Store/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <header className="d-flex justify-content-between align-items-center py-3">
          {/* Navigation Links */}
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-user" className="nav-link">
                Add User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all-users" className="nav-link">
                All Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faqs" className="nav-link">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                const searchQuery = e.target.value;
                dispatch(userActions.searchUser(searchQuery)); // Dispatch the search action
              }}
            />
          </form>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
