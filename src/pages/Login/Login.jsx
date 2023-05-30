import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card w-50 mx-auto">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email address</label>
                            <input type="email" name='email' className="form-control" id="inputEmail" placeholder="Enter email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" name='password' className="form-control" id="inputPassword" placeholder="Password" required />
                        </div>

                        <div className="d-grid gap-2 my-4">
                            <button type="submit" className="btn btn-primary btn-lg">Login</button>
                        </div>

                        <div className="d-flex flex-column flex-md-row gap-2">
                            <button className="btn btn-outline-danger btn-lg flex-grow-1">
                                <FaGoogle className="me-2" /> Login with Google
                            </button>
                            <button className="btn btn-outline-dark btn-lg flex-grow-1">
                                <FaGithub className="me-2" /> Login with GitHub
                            </button>
                        </div>
                        <p className="text-center my-4">Don't have an account? <Link to='/register'>Register here</Link>.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
