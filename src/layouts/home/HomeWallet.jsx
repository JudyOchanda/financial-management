import React from "react";
import { useUserContext } from "../../authContext";
import { Link } from "react-router-dom";
import HomeProfile from "./HomeProfile";

function HomeWallet() {
  const { user } = useUserContext();
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-2">
            <HomeProfile />
          </div>
          <div className="col-md-6 col-sm-12 mb-2">
            <div className="card shadow">
              <h5 className="card-header">Wallet</h5>
              <div className="card-body">
                <p className="card-text">Balance: Ksh {user.accountBalance}</p>
                <p className="card-text">
                  Transactions: {user.transactions.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-2">
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-2">
            <div className="card shadow">
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
          </div>

          <div className="col-md-4 col-sm-12 mb-2">
            <div className="card shadow">
              <h5 className="card-header">Debts</h5>
              <ul className="list-group">
                {user.debts.map((debt) => (
                  <li
                    key={debt.id}
                    className="list-group-item d-flex justify-content-between align-items-start"
                  >
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

          <div className="col-md-4 col-sm-12 mb-2">
            <div className="card shadow">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeWallet;
