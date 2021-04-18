import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto active">
                    <li className="nav-item ">
                    <Link to="/home" className="nav-link mr-5 text-white">Hem</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/courses" className="nav-link mr-5 text-white">Våra kurser</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link mr-5 text-white">Administratör</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link mr-5 text-white">Logga in</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/reviews" className="nav-link mr-5 text-white">Recensioner</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link mr-5 text-white">Kontakta oss</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;