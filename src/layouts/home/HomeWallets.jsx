import React from "react";
import { useUserContext } from "../../authContext";

function HomeWallets() {
  const { user } = useUserContext();
  return (
      <div className="card shadow">
        <h5 className="card-header">Wallet</h5>
        <div className="card-body">
          <p className="card-text">Balance: Ksh {user.accountBalance}</p>
          <p className="card-text">Transactions: {user.transactions.length}</p>
        </div>
      </div>
  );
}

export default HomeWallets;
