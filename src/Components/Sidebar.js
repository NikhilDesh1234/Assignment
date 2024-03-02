import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../Images/Group 1000006215.svg';
import bottomImage from '../Images/rm309-adj-05-01 2.svg'; // Corrected the image path
import { faBus, faUsers, faChartLine, faMessage, faCog } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-heading d-flex align-items-center">
                <center><img src={logo} className="sidebar-logo ml-5 mt-3" /></center>
            </div>
            <div className="list-group list-group-flush" style={{ marginTop: '25%' }}>
                <NavLink exact to="/" className="list-group-item list-group-item-action titillium-web-semibold" activeClassName="active" style={{ border: 'none', borderRadius: '25px' }}>
                    <FontAwesomeIcon icon={faBus} className="mr-1" /> Seats
                </NavLink>
                <NavLink to="/salesmembers" className="list-group-item list-group-item-action titillium-web-semibold mt-3" activeClassName="active" style={{ border: 'none' }}>
                    <FontAwesomeIcon icon={faUsers} className="mr-1"/> Sales members
                </NavLink>
                <NavLink to="/analytics" className="list-group-item list-group-item-action titillium-web-semibold mt-3" activeClassName="active" style={{ border: 'none' }}>
                    <FontAwesomeIcon icon={faChartLine} className="mr-1"/>Analytics
                </NavLink>
                <NavLink to="/chatsandtags" className="list-group-item list-group-item-action titillium-web-semibold mt-3" activeClassName="active" style={{ border: 'none' }}>
                    <FontAwesomeIcon icon={faMessage} className="mr-1"/> Chats & Tags
                </NavLink>
                <NavLink to="/custom" className="list-group-item list-group-item-action titillium-web-semibold mt-3" activeClassName="active" style={{ border: 'none', borderRadius: '25px' }}>
                    <FontAwesomeIcon icon={faCog} className="mr-1"/>  Custom
                </NavLink>
            </div>
            <img src={bottomImage} className="sidebar-image" />
        </div>
    );
}