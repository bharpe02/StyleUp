import React, {useState} from 'react';
import LogoButton from './LogoButton.js';
import '../assets/stylesheets/BannerMenu.css';
import { Link } from "react-router-dom";

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
              <p1>Username</p1> 
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
              <Link to="/Signup">
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
