import React, { useContext } from 'react';
import { AuthContext } from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

const Register = () => {
    const { handleSignUp } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        handleSignUp(email, password)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl my-10">
                    <form onSubmit={handleSubmit} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-success">Register now</button>
                        </div>
                        <p>New user <Link className='text-green-400' to='/login'>login now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;