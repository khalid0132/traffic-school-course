import React from 'react';
import car from '../../../images/car1.jfif'
import car2 from '../../../images/car2.jfif'
import car3 from '../../../images/car3.jfif'
import './VisitUs.css'

const VisitUs = () => {
    return (


        <div className="text-center mt-5 visit-us">
            <h5 style={{ color: 'Red' }} className="font-weight-bold text-uppercase mb-4">VÄLKOMMEN TILL KONTORET</h5>
            <p className="font-weight-bold mb-5">I vår trafikinformationstjänst visar vi det aktuella läget i trafiken. <br></br>Du hittar trafikinformation för vägtrafik, tågtrafik och vägfärjor i realtid.</p>

            <div class="row row-cols-1 row-cols-md-3 g-2">
                <div class="col">
                    <div class="card">
                        <img src={car} alt="CAR" />
                        <div class="card-body">
                            <h3 class="card-title">Öpettider</h3>
                            <ul class="list-group list-group-flush text-danger">
                                <li class="list-group-item">Måndag:  10:00-17:00</li>
                                <li class="list-group-item">Tisdag:  10:00-17:00</li>
                                <li class="list-group-item">Onsdag:  10:00-17:00</li>
                                <li class="list-group-item">Torsdag:  10:00-17:00</li>
                                <li class="list-group-item">Fredag:  10:00-17:00</li>
                                <li class="list-group-item">Lördag + Söndag:  Stangt</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={car2} alt="CAR" />
                        <div class="card-body">
                            <h3 class="card-title">Uppkörnings</h3>
                            <ul class="list-group list-group-flush text-danger">
                                <li class="list-group-item">Måndag:  07:00-17:00</li>
                                <li class="list-group-item">Tisdag:  07:00-17:00</li>
                                <li class="list-group-item">Onsdag:  07:00-17:00</li>
                                <li class="list-group-item">Torsdag:  07:00-17:00</li>
                                <li class="list-group-item">Fredag:  07:00-17:00</li>
                                <li class="list-group-item">Lördag + Söndag:  Stangt</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={car3} alt="CAR" />
                        <div class="card-body">
                            <h3 class="card-title">Utbildningsfordon</h3>
                            <ul class="list-group list-group-flush text-danger">
                                <li class="list-group-item">VW T-roc R-line</li>
                                <li class="list-group-item">Automat vaxlåda</li>
                                <li class="list-group-item">VW T-roc R-line</li>
                                <li class="list-group-item">Manuellt Vaxlåda</li>
                                <li class="list-group-item">Automat och Manuellt</li>
                               
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </div>


    );
};

export default VisitUs;