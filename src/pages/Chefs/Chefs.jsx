import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {

    const [chefData, setChefData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/chefs")
            .then((res) => res.json())
            .then((data) => setChefData(data))
    }, []);

    return (
        <div className='container'>
            <h1>This is chef {chefData.length}</h1>
            <div className='row'>
                {
                    chefData.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;