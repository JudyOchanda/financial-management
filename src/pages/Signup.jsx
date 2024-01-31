import React from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/links";

function Signup() {
  return (
    <>
      <div
        className="container d-flex align-items-center flex-column py-2"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <h2 className="fw-bold">Create An Account</h2>
        </div>
        <hr />
        <div className="d-flex justify-content-center align-items-center">
          <form
            action=""
            className="border rounded p-3 px-5 shadow"
            style={{ backgroundColor: "	#b2d8d8" }}
          >
            <div className="mb-3 mt-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                className="form-control border border-info"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Enter PIN
              </label>
              <input
                type="password"
                className="form-control border border-info"
                id="password"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                Repeat PIN
              </label>
              <input
                type="password"
                className="form-control border border-info"
                id="cpassword"
              />
            </div>

            <div className="mb-3">
              <button className="btn btn-dark w-100">Sign Up</button>
            </div>

            <div className="mb-3 text-center fst-italic">
              <small className="text-center">
                <Link to={publicLinks.Login}>Already have an account</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
