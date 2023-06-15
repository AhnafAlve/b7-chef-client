import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import OnlineOrder from '../OnlineOrder/OnlineOrder';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <OnlineOrder></OnlineOrder>
            <Faq></Faq>
        </div>
    );
};

export default Home;