import React from 'react';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            {/* <h1>Home is Here</h1> */}
            <Header></Header>
            <Courses></Courses>
        </div>
    );
};

export default Home;