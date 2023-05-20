import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, name, experience, numchefs, likes, chefPicture, details } = chef;

    return (
        <div className='col-md-4 mt-5'>
            <div className="card p-3" style={{ width: '25rem' }}>
                <img className="card-img-top" src={chefPicture} alt="Card image cap" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">Years of experience: {experience}</p>
                    <p className="card-text">Likes: {likes}</p>
                    <p className="card-text">Numbers of recipes: {numchefs}</p>
                    <Link to={`chefs/${id}`} className="btn btn-success">
                        View Recipes
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;