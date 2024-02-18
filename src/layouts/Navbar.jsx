import React from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/links";
import { useAuth } from "../firebase/auth";

function Navbar() {
  const { authUser, signOut } = useAuth();
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
              {authUser ? (
                <>
                  <li className="nav-item">
                    <Link to={publicLinks?.Home} className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={publicLinks?.Expenses} className="nav-link">
                      Expenses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={publicLinks?.Category} className="nav-link">
                      Category
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={publicLinks?.Charts} className="nav-link">
                      Analysis
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={publicLinks?.Settings} className="nav-link">
                      Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link onClick={signOut} className="nav-link text-danger">
                      Sign Out
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to={publicLinks?.Login} className="nav-link">
                      Sign In
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
