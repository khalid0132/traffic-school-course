import React from 'react';
import car from '../../../images/car.jfif'
import car2 from '../../../images/car2.jfif'
import car3 from '../../../images/car3.jfif'

const VisitUs = () => {
    return (


        <div className="text-center mt-5">
            <h2 className="text-uppercase mb-4">Welcome to visit us</h2>
            <p className="font-weight-bold">As a student with us, you get close to public transport within walking distance,<br></br>
                with very good communications to the central parts of Stockholm.</p>

            <div class="row row-cols-1 row-cols-md-3 g-2">
                <div class="col">
                    <div class="card">
                        <img src={car} alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Opening Hours</h3>
                            <ul class="list-group list-group-flush text-danger">
                                <li class="list-group-item">Monday:  10:00-17:00</li>
                                <li class="list-group-item">Tuesday:  10:00-17:00</li>
                                <li class="list-group-item">Wednesday:  10:00-17:00</li>
                                <li class="list-group-item">Thursday:  10:00-17:00</li>
                                <li class="list-group-item">Friday:  10:00-17:00</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={car2} alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Driving Lessons</h3>
                            <ul class="list-group list-group-flush text-danger">
                                <li class="list-group-item">Monday:  07:00-17:00</li>
                                <li class="list-group-item">Tuesday:  07:00-17:00</li>
                                <li class="list-group-item">Wednesday:  07:00-17:00</li>
                                <li class="list-group-item">Thursday:  07:00-17:00</li>
                                <li class="list-group-item">Friday:  07:00-17:00</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={car3} alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Training vehicles</h3>
                            <ul class="list-group list-group-flush text-danger">
                                <li class="list-group-item">VW T-roc R-line</li>
                                <li class="list-group-item">Automatic gearbox</li>
                                <li class="list-group-item">VW T-roc R-line</li>
                                <li class="list-group-item">Manual gearbox</li>
                                <li class="list-group-item">Automatic and Manual</li>
                               
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </div>


    );
};

export default VisitUs;