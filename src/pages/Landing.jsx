import React from 'react';
import { Link } from 'react-router-dom';
import { publicLinks } from '../constants/links';

function Landing () {
    return ( 
        <>
        <div className="container-fluid bg-success">
            <h1>Karibu Customer</h1>
            <Link to={publicLinks.Home}>Home</Link>
        </div>
        </>
     );
}

export default Landing;