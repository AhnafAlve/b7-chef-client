import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="body-tertiary" expand="lg" className="container">
                <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
                <Navbar.Collapse id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand fw-bold">B7 CHEF</Link>
                    <Nav className="m-auto mb-2 mb-lg-0">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    <Button variant="success" type="submit">Login</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;