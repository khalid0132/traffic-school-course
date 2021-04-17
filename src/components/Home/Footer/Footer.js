import React from 'react';
import { faPhone, faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faEmail } from '@fortawesome/free-brands-svg-icons';
import { Form } from 'react-bootstrap';

const Footer = () => {
   
    return (
        <footer className="footer-area clear-both mt-5 text-white">
            <div className="d-flex justify-content-">
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-4 align-center">
                        <ul className="social-media list-inline ">
                            <li>
                            <FontAwesomeIcon className="icon active-icon cursor-pointer" icon={faPhone} />
                            </li>
                        </ul>
                         <h4>Ring Oss</h4>
                        <p>+46737139307</p>
                    </div>
                    <div className="col-md-4">
                    <ul className="social-media list-inline">
                            <li>
                            <FontAwesomeIcon className="icon active-icon cursor-pointer" icon={faEnvelopeSquare} />
                            </li>
                        </ul>
                        <h4>E-post Oss</h4>
                        <p>khalid0132@sweden.se</p>
                    </div>
                    <div className="col-md-4">
                    <ul className="social-media list-inline">
                            <li>
                            <FontAwesomeIcon className="icon active-icon cursor-pointer" icon={faMapMarkerAlt} />
                            </li>
                        </ul>
                        <h4>Besök Kontoret</h4>
                        <p>Visättravagen 21, Huddinge, Sweden</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <Form>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <input type="text" class="form-control" placeholder="AnvänderNamn/ Username"/>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input type="email" class="form-control" placeholder="E-post/ E-mail"/>
                                </div>
                            </div>

                        <div className="row">
                        <div className="col-md-12 mb-4">
                            <textarea name="message" className="form-control" placeholder="Din Meddela/ Your Message"></textarea>
                        </div>
                        </div>
                        </Form>
                        <button className="btn btn-primary">Skicka Meddelande</button>
                    </div>
                </div>
            </div>
           </div>
            

        
                <div className="col-md-12 d-flex justify-content-center">
                    <ul className="mt-2 social-media list-inline">
                    <FontAwesomeIcon className="icon active-icon m-4 cursor-pointer" icon={faFacebookF} />
                    <FontAwesomeIcon className="icon active-icon m-4 cursor-pointer" icon={faInstagram} />
                    <FontAwesomeIcon className="icon active-icon m-4 cursor-pointer" icon={faGooglePlusG} />
                  
                        {/* <li> <span><a href="#"><i className="fab faYoutubeSquare"></i></a></span></li> */}
                    </ul>
                </div>
            <div className="copyRight text-center mt-5">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved by Khalid from Stockholm</p>
            </div>
    </footer>
    );
};

export default Footer;