import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, name, experience, numchefs, likes, chefPicture, details } = chef;

  return (
    <div className="col-lg-4 col-md-6 mt-5">
      <div className="card p-3">
        <LazyLoad height={260} offset={100} debounce={false} once>
          <img
            className="card-img-top img-fluid"
            src={chefPicture}
            alt="Chef-image"
          />
        </LazyLoad>
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">Years of experience: {experience}</p>
          <p className="card-text">Likes: {likes}</p>
          <p className="card-text">Number of recipes: {numchefs}</p>
          <Link to={`/chefs/${id}`} className="btn btn-success">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
