import React, {useState} from 'react';
import LogoButton from './LogoButton.js';
import '../assets/stylesheets/BannerMenu.css';
import { Link, useNavigate } from "react-router-dom";
import DefaultPFP from '../assets/images/DefaultPFP.png'

const BannerMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='banner-container'> 
        {/**Container for the Banner Menu.*/}
        <div>
          {/* Logo Button */}
            <LogoButton />  
        </div>

        <div className='button-container'>
          {isLoggedIn ? (
            <>
            {/* When User is logged in */}
              {/* PFP component PLACEHOLDER*/}
              <img
              src = {DefaultPFP} height = '20%' width = '20%'>
              </img>
              <h3>Username</h3> 
                <button className='logout-button' onClick={() => setIsLoggedIn(false)}>
                  Log Out
                </button>
            </>
          ):(
            <>
            {/* When User is not Logged in */}
                <button className='login-button' /**Temporary ==> */  onClick={() => setIsLoggedIn(true)}>
                    Log In
                </button>
              <Link to="/Wishlist">
                  <button className="signup-button">
                    Sign Up!
                  </button>
              </Link>
            </>
          )}
        </div>

    </div>
  )
}

export default BannerMenu
