import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLinks } from './links';

const Landing = React.lazy(() => import('../pages/Landing'));
const Home = React.lazy(() => import('../pages/Home'));
const Profile = React.lazy(() => import('../pages/Profile'));
const Budget = React.lazy(() => import('../pages/Budget'));
const Login = React.lazy(() => import('../pages/Login'));


function BaseRouter() {
    return (  
        <Router>
            <Suspense fallback={
                <>Loading...</>
            }>
                <Routes>
                    <Route exact path={publicLinks.Landing} element={<Landing />} />
                    <Route path={publicLinks.Home} element={<Home/>} />
                    <Route path={publicLinks.Profile} element={<Profile/>} />
                    <Route path={publicLinks.Budget} element={<Budget/>} />
                    <Route path={publicLinks.Login} element={<Login/>} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default BaseRouter;