import React from "react";
import Button from "react-bootstrap/Button";
import { myExpenses } from "../data/expenses";
import { Link } from "react-router-dom";
function Expenses() {
  return (
    <>
      <div className="container py-3">
        <section>
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold text-uppercase">Expenses</h2>
            <Button variant="outline-primary">Add Expense</Button>
          </div>
        </section>
        <hr />

        <section>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myExpenses.map((item) => (
                  <>
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.amount}</td>
                      <td>{item.category}</td>
                      <td>{item.description}</td>
                      <td>{item.date}</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <Button variant="outline-primary">Edit</Button>
                          <Link className="btn btn-outline-danger">Delete</Link>
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Expenses;
