import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        // Validate email and password
        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }

        if (password.length < 6) {
            setError('Password should be at least 6 characters long');
            return;
        }
        setName('');
        setError('');
        setEmail('');
        setPassword('');
        setPhotoURL('');

        // Proceed with registration logic
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card w-75 mx-auto">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputPhotoURL" className="form-label">Photo URL</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputPhotoURL"
                                placeholder="Enter photo URL"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                            />
                        </div>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <div className="d-grid gap-2 my-4">
                            <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                        <p className="text-center my-4">Already have an account? <Link to='/login'>Login here</Link>.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
