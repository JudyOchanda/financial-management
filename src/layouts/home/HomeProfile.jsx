import React from "react";
import avatarImg from "../../assets/images/home/ava.jpg";
import { useUserContext } from "../../authContext";

function HomeProfile() {
  const { user } = useUserContext();
  return (
    <>
      <section className="mb-3">
        <div className="card shadow">
          <div className="card-body">
            <img src={avatarImg} alt="" className="avatar-image mb-2" />
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.phone}</p>
            <p className="card-text">{user.email}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeProfile;
