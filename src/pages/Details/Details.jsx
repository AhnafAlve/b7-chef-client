import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import TopRecipes from './TopRecipes';

const Details = () => {
    const detail = useLoaderData();
    const { id, name, experience, numchefs, likes, chefPicture, details } = detail;

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={chefPicture} alt="Chef" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Years of experience: {experience}</Card.Text>
                        <Card.Text>Likes: {likes}</Card.Text>
                        <Card.Text>Number of recipes: {numchefs}</Card.Text>
                        <Card.Text>{details}</Card.Text>
                        <Link to="/" className="btn btn-success">
                            Show All Chefs
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            <TopRecipes></TopRecipes>
        </div>
    );
};

export default Details;

