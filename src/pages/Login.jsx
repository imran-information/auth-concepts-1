import React, { useContext } from 'react';
import { AuthContext } from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

const Login = () => {
    const { handleGoogleLogin, handleLogin } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        handleLogin(email, password)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>

                </div>
                <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl w-96">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New user <Link className='text-green-400' to='/register'>Register now</Link></p>
                    </form>
                    <div className='mb-10 mx-10'>
                        <div className='mt-5 flex justify-center'>
                            <button onClick={handleGoogleLogin} className='btn'>Google login</button>


                        </div>
                        <div className='mt-5 flex justify-between'>
                            <button className='btn'>Twitter login</button>

                            <button className='btn'>GitHub login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;