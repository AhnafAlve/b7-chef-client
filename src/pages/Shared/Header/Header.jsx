import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Navbar bg="body-tertiary" expand="lg" className="container">
            <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
            <Navbar.Collapse id="navbarTogglerDemo01">
                <Link to="/" className="navbar-brand fw-bold">B7 CHEF</Link>
                <Nav className="ms-auto mb-2 mb-lg-0 bold">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                <Nav>
                    {
                        user && <img title={user.displayName} className='userProfile rounded-circle me-2' src={user.photoURL} alt="" />
                    }

                    {user ?
                        <Button onClick={handleLogOut} variant="dark" type="submit">Logout</Button> :
                        <Link to='/login'>
                            <Button variant="success" type="submit">Login</Button>
                        </Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;