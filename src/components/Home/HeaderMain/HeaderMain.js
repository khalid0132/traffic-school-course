import React from 'react';
import car from '../../../images/car.jpg';



const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h2 style={{color: "White"}} className="mb-3">Your Driving Journey <br/>Begins Here</h2>
                <p className="text-secondary mt-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis qui in quos! Expedita, vel blanditiis.</p>
            <button className="btn fw-bold text-white text-uppercase" style={{background: "red"}}>Book your slot</button>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={car} alt="" className="img-fluid rounded"/>
            </div>
        </main>
    );
};

export default HeaderMain;