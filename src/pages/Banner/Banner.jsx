import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Banner = () => {
    return (
        <Container className="container py-4">
            <Row>
                <Col md={6} sm={12} className="d-flex align-items-center">
                    <div>
                        <h1 className="mb-4">Try our Delicious Recipe</h1>
                        <p className="lead">Our famous beef and mushroom pie recipe is a crowd pleaser and has been in our family for generations. It's made with locally-sourced, grass-fed beef, and a mix of fresh and dried mushrooms for maximum flavor.</p>
                        <p className="lead">We make our own buttery pie crust from scratch and use a blend of herbs and spices to season the filling. The result is a rich, savory pie that's perfect for a cozy night in.</p>
                        <p className="lead">Give our recipe a try and impress your family and friends with a delicious homemade meal!</p>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <Image src="https://plus.unsplash.com/premium_photo-1661310019346-4cb563a19aec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" fluid className="h-100 rounded" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;

