import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3 mt-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="mb-0">© 2023 My Restaurant. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item"><a href="/" className="text-light">Terms of Use</a></li>
                            <li className="list-inline-item"><a href="/" className="text-light">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="/" className="text-light">Contact Us</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;