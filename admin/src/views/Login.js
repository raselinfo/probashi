import React from 'react';

const Login = () => {
    const loginHandler = (e) => {
        e.preventDefault()
        console.log("Login")
    }
    return (
        <div className='container py-5 my-5'>
            <h2 className="login__heading">আমি প্রবাসীতে স্বাগতম</h2>
            <div className="col-md-6 mx-auto login-form">
                <form>
                    <input type="email" placeholder="Enter Yor Email" className='form-control form-control-lg mb-3' />
                    <input type="password" placeholder="Enter Yor Password" className='form-control form-control-lg mb-3' />
                    <button className='btn btn-info btn-lg' type="submit" onClick={loginHandler}>Login</button>

                    <p className='mt-3 text-danger font-bold'>❌Error </p>
                </form>
            </div>
        </div>
    );
};

export default Login;