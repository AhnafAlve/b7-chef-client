import React from 'react';
import './OnlineOrder.css'

const OnlineOrder = () => {
    return (
        <div className="online-order">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h1 className="display-4 mb-4">Order Online</h1>
                        <p className="lead">Enjoy our delicious recipes from the comfort of your home</p>
                        <button className="btn btn-success btn-lg">Place an Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineOrder;