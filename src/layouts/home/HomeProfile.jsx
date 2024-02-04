import React from "react";
import avatarImg from "../../assets/images/home/ava.jpg";

function HomeProfile() {
  return (
    <>
      <section className="mb-3">
        <div className="card bg-dark shadow">
          <div className="card-body text-white">
            <img src={avatarImg} alt="" className="avatar-image mb-2" />
            <h5 className="card-title">Hello John</h5>
            <p className="card-text">+123456789</p>
            <p className="card-text">john@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeProfile;
