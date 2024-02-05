import React from "react";
import { useUserContext } from "../../authContext";
import { Link } from "react-router-dom";

function HomeWallet() {
  const { user } = useUserContext();
  return (
    <>
      <section className="mb-3">
        <div className="card shadow">
          <h5 className="card-header">Wallet</h5>
          <div className="card-body">
            <p className="card-text">Balance: Ksh {user.accountBalance}</p>
            <p className="card-text">
              Transactions: {user.transactions.length}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-3">
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3">
            <div className="card shadow">
              <h5 className="card-header">Transactions</h5>
              <ul className="list-group">
                {user.transactions.map((transaction) => (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
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
          </div>

          <div className="col-md-6 col-sm-12 mb-3">
            <div className="card shadow">
              <h5 className="card-header">Debts</h5>
              <ul className="list-group">
                {user.debts.map((debt) => (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{debt.creditors}</div>
                      Ksh {debt.amount} - {debt.dueDate}
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
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeWallet;
