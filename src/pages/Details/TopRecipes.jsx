import React, { useState } from 'react';
import { Card, CardGroup, Button, Toast } from 'react-bootstrap';

const TopRecipes = () => {

    const [favoriteIndex, setFavoriteIndex] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const handleFavoriteClick = (index) => {
        setFavoriteIndex(index);
        setShowToast(true);
    };

    return (
        <>
            <CardGroup className="my-3">
                <div className="col-md-4">
                    <Card className='m-4'>
                        <Card.Img
                            variant="top"
                            src="https://img.freepik.com/free-photo/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast_140725-159215.jpg?w=1380&t=st=1684618912~exp=1684619512~hmac=63d5faeb3b878ecfd11871c8d429749f2b7f9919d8419b6e3db681ef93386c30"
                        />
                        <Card.Body>
                            <Card.Title>Classic Cheeseburger</Card.Title>
                            <Card.Text>
                                <strong>Ingredients:</strong> Ground beef, American cheese, Hamburger bun, Lettuce, Tomato, Onion,
                                Pickles
                            </Card.Text>
                            <Card.Text>
                                <strong>Method:</strong>
                                <p>1. Shape and cook ground beef patties.</p>
                                <p>2. Add cheese on top of the patties to melt.</p>
                                <p>3. Assemble burger with bun, lettuce, tomato, onion, and pickles.</p>
                            </Card.Text>
                            <Card.Text>
                                <strong>Rating:</strong> 4.6
                            </Card.Text>
                            <Button
                                variant="primary"
                                disabled={favoriteIndex === 0}
                                onClick={() => handleFavoriteClick(0)}
                            >
                                {favoriteIndex === 0 ? 'Added to Favorites' : 'Favorite'}
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className='m-4'>
                        <Card.Img
                            variant="top"
                            src="https://img.freepik.com/free-photo/macaroni-cheese-ham_1339-7544.jpg?w=1380&t=st=1684619167~exp=1684619767~hmac=1771d4297df8b8cd567256cd7372b95ee19cdef7f17023f07d2ad689b6741ae2"
                        />
                        <Card.Body>
                            <Card.Title>Macaroni and Cheese</Card.Title>
                            <Card.Text>
                                <strong>Ingredients:</strong> Elbow macaroni, Cheddar cheese, Milk, Butter, Bread crumbs
                            </Card.Text>
                            <Card.Text>
                                <strong>Method:</strong>
                                <p>1. Cook macaroni and prepare cheese sauce.</p>
                                <p>2. Combine cooked macaroni with cheese sauce.</p>
                                <p>3. Sprinkle with bread crumbs and bake until golden and bubbly.</p>
                            </Card.Text>
                            <Card.Text>
                                <strong>Rating:</strong> 4.4
                            </Card.Text>
                            <Button
                                variant="primary"
                                disabled={favoriteIndex === 1}
                                onClick={() => handleFavoriteClick(1)}
                            >
                                {favoriteIndex === 1 ? 'Added to Favorites' : 'Favorite'}
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className='m-4'>
                        <Card.Img
                            variant="top"
                            src="https://img.freepik.com/free-photo/top-view-fruit-cake-round-delicious-with-apples-light-desk-cake-biscuit-fruit_140725-22801.jpg?w=1380&t=st=1684619245~exp=1684619845~hmac=6f0e645a73fa0466c0127cb1c1b26c25518f833b30b95ec6753c039da055d02e"
                        />
                        <Card.Body>
                            <Card.Title>Classic Apple Pie</Card.Title>
                            <Card.Text>
                                <strong>Ingredients:</strong> Granny Smith apples, Sugar, Cinnamon, Lemon juice, Pie crust, Egg wash
                            </Card.Text>
                            <Card.Text>
                                <strong>Method:</strong>
                                <p>1. Mix apple slices with sugar, cinnamon, and lemon.</p>
                                <p>2. Place apple mixture in pie crust.</p>
                                <p>3. Brush with egg wash and bake.</p>
                            </Card.Text>
                            <Card.Text>
                                <strong>Rating:</strong> 4.7
                            </Card.Text>
                            <Button
                                variant="primary"
                                disabled={favoriteIndex === 2}
                                onClick={() => handleFavoriteClick(2)}
                            >
                                {favoriteIndex === 2 ? 'Added to Favorites' : 'Favorite'}
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </CardGroup>
            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                style={{
                    position: 'fixed',
                    top: '10px',
                    right: '10px',
                }}
            >
                <Toast.Header>
                    <strong className="m-auto">Favorite Recipe</strong>
                </Toast.Header>
                <Toast.Body>This recipe has been added to your favorites.</Toast.Body>
            </Toast>
        </>
    );
};

export default TopRecipes;
