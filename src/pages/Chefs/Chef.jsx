import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, name, experience, numRecipes, likes, chefPicture, details } = chef;

    return (
        <div className="col-lg-4 col-md-6 mt-5">
            <div className="card p-3">
                <img className="card-img-top img-fluid" src={chefPicture} alt="Chef" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">Years of experience: {experience}</p>
                    <p className="card-text">Likes: {likes}</p>
                    <p className="card-text">Number of recipes: {numRecipes}</p>
                    <Link to={`/chefs/${id}`} className="btn btn-success">
                        View Recipes
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;
