import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useAuth } from "../firebase/auth";

function Home() {
  const { authUser } = useAuth();

  useEffect(() => {}, [authUser]);

  return (
    <>
      <div className="container py-2">
        <div className="d-flex justify-content-between">
          <h4>{authUser.email}</h4>
          <Button variant="outline-primary">Add Expense</Button>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Home;
