import React from "react";
import avatarImg from "../assets/images/home/ava.jpg";
import { useUserContext } from "../authContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Home() {
  const { user } = useUserContext();
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-3">
            <article>
              <div className="card">
                <div className="card-body">
                  <img src={avatarImg} alt="" className="avatar-image mb-2" />
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.phone}</p>
                  <p className="card-text">{user.email}</p>
                </div>
              </div>
            </article>
            <hr />
            <article>
              <h6>Quick Access</h6>
              <hr />
              <div className="list-group list-group-flush">
                <Link className="list-group-item">Expenses</Link>
                <Link className="list-group-item">Category</Link>
                <Link className="list-group-item">Charts</Link>
                <Link className="list-group-item">Setting</Link>
              </div>
            </article>
          </div>

          <div className="col-md-8 col-sm-12 mb-3">
            <div className="d-flex justify-content-between">
              <h4>Expenses</h4>
              <Button variant="outline-primary">Add Expense</Button>
            </div>
            <p>23/09/2024</p>
            <hr />

            <div className="mb-3">
              <h6 className="text-secondary">Today</h6>
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="me-auto">
                    <div className="fw-semibold">Food</div>
                    Ksh 300
                  </div>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="me-auto">
                    <div className="fw-semibold">Food</div>
                    Ksh 300
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="mb-3">
              <h6 className="text-secondary">Your Expenses</h6>
              <article>
                <div className="row">
                  <div className="col-md-4 col-sm-12 mb-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Food</h5>
                        <p className="card-text">Ksh 300</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12 mb-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Food</h5>
                        <p className="card-text">Ksh 300</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12 mb-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Food</h5>
                        <p className="card-text">Ksh 300</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
