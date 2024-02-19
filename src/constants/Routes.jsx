import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { publicLinks } from "./links";
import Navbar from "../layouts/Navbar";
import { useAuth } from "../firebase/auth";

const Landing = React.lazy(() => import("../pages/Landing"));
const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));
const Signup = React.lazy(() => import("../pages/Signup"));
const Expenses = React.lazy(() => import("../pages/Expenses"));
const Category = React.lazy(() => import("../pages/Category"));
const Charts = React.lazy(() => import("../pages/Charts"));
const Settings = React.lazy(() => import("../pages/Settings"));

function BaseRouter() {
  const { authUser } = useAuth();

  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Navbar />
        <Routes>
          {authUser ? (
            <>
              <Route exact path={publicLinks.Home} element={<Home />} />
              <Route path={publicLinks.Expenses} element={<Expenses />} />
              <Route path={publicLinks.Category} element={<Category />} />
              <Route path={publicLinks.Charts} element={<Charts />} />
              <Route path={publicLinks.Settings} element={<Settings />} />
            </>
          ) : (
            <>
              <Route exact path={publicLinks.Landing} element={<Landing />} />
              <Route path={publicLinks.Login} element={<Login />} />
              <Route path={publicLinks.Signup} element={<Signup />} />
            </>
          )}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;
