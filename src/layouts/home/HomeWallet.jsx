import React from "react";
import { useUserContext } from "../../authContext";

function HomeWallet() {
  const { user } = useUserContext();
  return (
    <>
      <section className="mb-3">
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title">Wallet</h5>
            <p className="card-text">Ksh {user.accountBalance}</p>
            <p className="card-text">
              Transactions: {user.transactions.length}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeWallet;
