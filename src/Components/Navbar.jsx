import React, { useState } from 'react'
import './Navbar.css'
import menu_icon from '../assets/menu.png'
import logo from '../assets/sr7play_logo.png'
import notification_icon from '../assets/notification.png'
import profile_icon from '../assets/sharma.jpg'
import setting_icon from '../assets/setting.png'
import login_icon from '../assets/user-interface.png'
import { Link } from 'react-router-dom'
import Search from './Search'


const Navbar = ({ setSideNavBar, setProfile, setNotifications, onSearchChange }) => {
    return (
        <>
            <nav className='flex-div'>
                <div className="nav-left flex-div">
                    <img className='menu-icon' onClick={() => setSideNavBar((prev) => prev == true ? false : true)} src={menu_icon} alt="" />
                    <Link to={'/'}>
                        <h1>Sr7</h1>
                        <img className='logo' src={logo} alt="" />
                        <h1>Play</h1>
                    </Link>
                </div>
                <div className="nav-middle flex-div">
                    <Search onSearchChange={onSearchChange} />
                </div>
                <div className="nav-right flex-div">
                    <Link to={'/signup'}> <img src={login_icon} alt="" /> </Link>
                    <img id='setting' src={setting_icon} alt="" />
                    <img id='notif' src={notification_icon} onClick={() => setNotifications((pre) => pre == true ? false : true)} alt="" />
                    <img className='user-icon' src={profile_icon} onClick={() => setProfile((pre) => pre === true ? false : true)} alt="" />
                </div>
            </nav>
            <div className="mobile-search">
                <Search onSearchChange={onSearchChange} />
            </div>


        </>

    )
}

export default Navbar
