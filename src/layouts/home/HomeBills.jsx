import React from "react";
import { useUserContext } from "../../authContext";
import { Link } from "react-router-dom";

function HomeBills() {
  const { user } = useUserContext();
  return (
    <>
      <div className="card shadow mb-3">
        <h5 className="card-header">Bills</h5>
        <ul className="list-group">
          {user.bills.map((bill) => (
            <li
              key={bill.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{bill.type}</div>
                Ksh {bill.amount}
              </div>
              <span className="badge bg-primary rounded-pill">
                <Link>
                  <i className="bi bi-arrow-right text-white"></i>
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomeBills;
