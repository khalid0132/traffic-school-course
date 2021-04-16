import React from 'react';
import Courses from '../Courses/Courses';
import CustomerReview from '../CustomerReview/CustomerReview';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Prices from '../Prices/Prices';
import VisitUs from '../VisitUs/VisitUs';

const Home = () => {
    return (
        <div>
            {/* <h1>Home is Here</h1> */}
            <Header></Header>
            <Courses></Courses>
            <VisitUs></VisitUs>
            <Prices></Prices>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;