import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { faListAlt, faPlus, faUsersCog, faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
            <li>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Hem</span> 
                </Link>
            </li>
            <li>
                <Link to="/courses" className="text-white">
                    <FontAwesomeIcon icon={faListAlt} /> <span>Kurs listan</span> 
                </Link>
            </li>
            <li>
                <Link to="/addCourse" className="text-white">
                    <FontAwesomeIcon icon={faPlus} /> <span>Lägg till kurser</span> 
                </Link>
            </li>
            <li>
                <Link to="/createAdmin" className="text-white">
                    <FontAwesomeIcon icon={faUsersCog} /> <span>Skapa admin</span>
                </Link>
            </li>
           
        </ul>
        <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logga ut</span></Link>
            </div>
    </div>
    );
};

export default Sidebar;