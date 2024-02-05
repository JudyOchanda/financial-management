import React from "react";
import { walletsData } from "../../data/wallet";
import { Link } from "react-router-dom";

function HomeWallet() {
  return (
    <>
      <section className="mb-3">
        <div className="row">
          {walletsData.map((wallet) => (
            <div className="col-md-4 col-sm-12 mb-2" key={wallet.id}>
              <Link className="text-decoration-none">
                <div className="card shadow bg-light-subtle">
                  <div className="card-body">
                    <h5 className="card-title">{wallet.name}</h5>
                    <p className="card-text">
                      {wallet.initialBalance} {wallet.currency}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomeWallet;
