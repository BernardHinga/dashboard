import React from "react";
import { Link } from "react-router-dom";

import { IoHomeOutline, IoSettingsOutline, IoNotificationsOutline, IoLogOutOutline } from 'react-icons/io5'
import { IconContext } from "react-icons";

import logo_l from './utils/media/logo_l.svg'
// import logo_s from './utils/media/logo_s.svg'

export const Nav = () => {
    return (
    <IconContext.Provider value = {{className: 'icons'}}>
        <div className="nav">
            <img className="logo" src={logo_l} alt="logo"/>
            <nav>
                <ul className="nav__links">
                    <Link to='/'><li><IoHomeOutline/><span>Dashboard</span></li></Link>
                    <Link to='/settings'><li><IoSettingsOutline/><span>Settings</span></li></Link>
                    <Link to='/notifications'><li><IoNotificationsOutline/><span>Notifications</span></li></Link>
                </ul>
            </nav>
            <button className="logout"><IoLogOutOutline/>Log Out</button>
        </div>
        </IconContext.Provider>
    );

}