import React from "react";
import { useUserContext } from "../authContext";
import avatar from "../assets/images/home/ava.jpg";
import Button from "react-bootstrap/Button";

function Settings() {
  const { user } = useUserContext();
  return (
    <>
      <div className="container py-3">
        <section className="mb-3">
          <h2 className="fw-bold mb-2">Your Profile</h2>
          <div className="card border-0 shadow bg-white rounded p-3 mb-3">
            <img src={avatar} alt="" className="avatar-image" />
            <h2 className="card-title">{user.name}</h2>
            <p className="card-text">{user.username}</p>
            <p className="card-text">{user.email}</p>
            <p className="card-text">{user.phone}</p>
            <Button className="card-text btn btn-info">Update Profile</Button>
          </div>
        </section>

        <hr />

        <section className="mb-3">
          <h2 className="fw-bold">Preferences</h2>
          <p>Coming soon</p>
        </section>
      </div>
    </>
  );
}

export default Settings;
