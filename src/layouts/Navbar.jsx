import React from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/links";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top bg-dark-subtle mb-3">
        <div className="container">
          <Link className="navbar-brand fw-semibold">Financial Management</Link>

          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar" // Add aria-controls attribute
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={publicLinks?.Home} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={publicLinks?.ExpenseTracking} className="nav-link">
                  Expenses
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
