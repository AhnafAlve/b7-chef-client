import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary container">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand fw-bold" to="/">B7 CHEF</Link>
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                        <button className="btn btn-success" type="submit">Login</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;