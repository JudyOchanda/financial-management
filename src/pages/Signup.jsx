import React from 'react';

function Signup() {
    return ( <>
    <div className="container d-flex align-items-center flex-column py-2">
        <div className="text-center">
            <h2 className="fw-bold">Create An Account</h2>
        </div>
        <hr />
        <div className="d-flex justify-content-center align-items-center">
        <form action="" className='border rounded p-3 px-5 shadow'>
           <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            </div> 
            <div className="form-floating mb-3">
            <input type="password" className="form-control" id='password' />
            <label htmlFor="password">Password</label>
            </div>
            <div className="form-floating mb-3">
            <input type="password" className="form-control" id='confirmPassword' />
            <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
        </form>
        </div>
    </div>
    </> );
}

export default Signup;