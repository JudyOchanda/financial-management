import React from "react";
import HomeProfile from "../layouts/home/HomeProfile";
import HomeWallet from "../layouts/home/HomeWallet";

function Home() {
  return (
    <>
      <div className="container">
        {/* <HomeProfile /> */}
        <HomeWallet />
      </div>
    </>
  );
}

export default Home;
