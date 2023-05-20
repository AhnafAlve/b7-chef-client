import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id, name}= useParams();
    return (
        <div className='container'>
            <h3>this is chef details {id} </h3>
            <h3> this is name {name}</h3>
        </div>
    );
};

export default Details;