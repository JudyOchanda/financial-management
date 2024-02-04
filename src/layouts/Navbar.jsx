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
                  <i className="bi bi-house"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={publicLinks?.ExpenseTracking} className="nav-link">
                  <i className="bi bi-cart"></i> Expense Tracking
                </Link>
              </li>
              <li className="nav-item">
                <Link to={publicLinks?.Budget} className="nav-link">
                  <i className="bi bi-credit-card"></i> Budget
                </Link>
              </li>
              <li className="nav-item">
                <Link to={publicLinks?.ExpenseTracking} className="nav-link">
                  <i className="bi bi-graph-up-arrow"></i> Reports & Analysis
                </Link>
              </li>
              <li className="nav-item">
                <Link to={publicLinks?.Signup} className="nav-link">
                  Signup
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
