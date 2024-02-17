import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { publicLinks } from "../constants/links";
import { myExpenses } from "../data/expenses";

function Home() {

  const recentExpenses = myExpenses.slice(0, 3);
  const currentDate = new Date().toISOString().split("T")[0];

  const expensesForCurrentDay = myExpenses.filter(
    (expense) => expense.date === currentDate
  );

  console.log(expensesForCurrentDay);

  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col-md-9 col-sm-12 mb-3">
            <div className="d-flex justify-content-between">
              <h4>Dashboard</h4>
              <Button variant="outline-primary">Add Expense</Button>
            </div>
            <p>23/09/2024</p>
            <hr />

            <div className="mb-3">
              <h6 className="text-secondary text-uppercase">
                Today's Expenses
              </h6>
              {expensesForCurrentDay ? (
                <>
                  <div className="list-group list-group-flush">
                    {expensesForCurrentDay.map((item) => (
                      <>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                          <div className="me-auto">
                            <div className="fw-semibold">{item.category}</div>
                            Ksh {item.amount}
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p>No expenses today</p>
                </>
              )}
            </div>

            <hr />

            <div className="mb-3">
              <h6 className="text-secondary text-uppercase">Your Expenses</h6>
              <article>
                <div className="row">
                  {recentExpenses.map((item) => (
                    <>
                      <div className="col-md-4 col-sm-12 mb-2" key={item.id}>
                        <div className="card h-100">
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.amount}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </article>
            </div>
          </div>

          <div className="col-md-3 col-sm-12 mb-3">
            <article>
              <h6>Quick Access</h6>
              <hr />
              <div className="list-group list-group-flush">
                <Link to={publicLinks?.Expenses} className="list-group-item">
                  Expenses
                </Link>
                <Link className="list-group-item">Category</Link>
                <Link className="list-group-item">Charts</Link>
                <Link className="list-group-item">Setting</Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
