import React from 'react';
import car from '../../../images/car.jpg';
import './HeaderMain.css'



const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h2 style={{color: "White"}} className="mb-3">Grattis Grattis Grattis!!! <br></br> Din Körresa Börjar Här</h2>
                <p className="text-secondary mt-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis qui in quos! Expedita, vel blanditiis.</p>
            <button className="btn fw-bold text-white text-uppercase" style={{background: "red"}}>Boka Din Tid</button>
            </div>
            <div className="col-md-6 col-sm-6 col-12 item">
                <div className="front">
                     <img src={car} alt="" className="img-fluid rounded"/>
                </div>
                <div className="back">
                    <h2 className="text-center m-5">Stockholm Trafik Verket</h2>
                    <p className="p-5">Inrikesresor och kollektivtrafik
Enligt smittskyddslagen har var och en i Sverige ansvar att förhindra spridning av smittsamma sjukdomar som covid-19. Här finns information om vad du behöver tänka på vid resor inom landet.</p>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;