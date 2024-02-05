import React from "react";
import { useUserContext } from "../../authContext";
import { Link } from "react-router-dom";

function HomeTransactions() {
  const { user } = useUserContext();
  return (
    <>
      <div className="card shadow mb-2">
        <h5 className="card-header">Transactions</h5>
        <ul className="list-group">
          {user.transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{transaction.type}</div>
                Ksh {transaction.amount}
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

export default HomeTransactions;
