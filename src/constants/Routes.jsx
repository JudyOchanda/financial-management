import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicLinks } from "./links";
import Navbar from "../layouts/Navbar";

const Landing = React.lazy(() => import("../pages/Landing"));
const Home = React.lazy(() => import("../pages/Home"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Budget = React.lazy(() => import("../pages/Budget"));
const Login = React.lazy(() => import("../pages/Login"));
const Signup = React.lazy(() => import("../pages/Signup"));
const ExpenseTracking = React.lazy(() => import("../pages/ExpenseTracking"));

function BaseRouter() {
  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Navbar />
        <Routes>
          <Route exact path={publicLinks.Landing} element={<Landing />} />
          <Route path={publicLinks.Home} element={<Home />} />
          <Route path={publicLinks.Profile} element={<Profile />} />
          <Route path={publicLinks.Budget} element={<Budget />} />
          <Route path={publicLinks.Login} element={<Login />} />
          <Route path={publicLinks.Signup} element={<Signup />} />
          <Route path={publicLinks.ExpenseTracking} element={<ExpenseTracking />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;
