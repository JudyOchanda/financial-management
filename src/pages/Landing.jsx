import React from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/links";
import landingImage from "../assets/images/land.svg";

function Landing() {
  return (
    <>
      <div className="container d-flex" style={{ height: "100vh" }}>
        <div className="row flex-lg-row justify-content-center align-items-center g-5 py-5">
          <div className="col-10 col-sm-12 col-lg-6">
            <img
              src={landingImage}
              alt=""
              className="d-block mx-lg-auto img-fluid"
            />
          </div>

          <div className="col-lg-6">
            <h1 className="fw-bold">
              Manage your finances from one app
            </h1>
            <h4 className="fw-semibold">Payments | Transfer | Family</h4>
            <Link
              to={publicLinks.Login}
              className="btn btn-outline-info "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
