import React, { useState } from 'react';

const Login = () => {
    const [credential, setCredential] = useState({ email: "", password: "" })
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const loginHandler = async (e) => {
        e.preventDefault()
        if (!credential.email || !credential.password) {
            return alert("Give proper credentials")
        }
        try {
            setLoading(true)
            const response = await fetch(`${process.env.REACT_APP_API}/login`, {
                method: "POST",
                body: JSON.stringify({
                    email: credential.email,
                    password: credential.password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            })
            const data = await response.json()
            console.log(data)
            setMessage(data.message)
            setLoading(false)
        } catch (err) {
            setMessage(err.message)
            setLoading(false)
        }

    }
    return (
        <div className='container py-5 my-5'>
            <h2 className="login__heading">আমি প্রবাসীতে স্বাগতম</h2>
            <div className="col-md-6 mx-auto login-form">
                <form>
                    <input onChange={(e) => setCredential({ ...credential, email: e.target.value })} type="email" placeholder="Enter Yor Email" className='form-control form-control-lg mb-3' />
                    <input onChange={(e) => setCredential({ ...credential, password: e.target.value })} type="password" placeholder="Enter Yor Password" className='form-control form-control-lg mb-3' />
                    <button disabled={loading} className='btn btn-info btn-lg' type="submit" onClick={loginHandler}>Login</button>

                    <p className='mt-3 text-danger font-bold'>{message} </p>
                </form>
            </div>
        </div>
    );
};

export default Login;