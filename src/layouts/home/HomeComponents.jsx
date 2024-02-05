import React from "react";
import HomeProfile from "./HomeProfile";
import HomeBills from "./HomeBills";
import HomeDebts from "./HomeDebts";
import HomeTransactions from "./HomeTransactions";
import HomeWallets from "./HomeWallets";

function HomeComponents() {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <HomeProfile />
            <HomeWallets />
          </div>

          <div className="col-md-8 col-sm-12">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <HomeTransactions />
                <HomeDebts />
                <HomeBills />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeComponents;
