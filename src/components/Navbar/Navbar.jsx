import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profilePic from '../../assets/profile_img.png'
import dropdownIcon from '../../assets/caret_icon.svg'
import { logout } from '../../Firebase'


const Navbar = () => {

  return (
    <div className="main-div">
      <div className="logo-div">
        <img src={logo} alt="Logo" className='logo'/>
        
        <div className="list">
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse By Language</li>
          </ul>
        </div>
        </div>
        <div className="icons">
          <img src={searchIcon} alt="" />
          <p>Children</p>
          <img src={bellIcon} alt="" />
          <div className="profile">
            <img src={profilePic} alt="" />
             
             <div className="dropdown">
            <img src={dropdownIcon} alt="" />
             <p>sign out of Netflix</p>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Navbar
