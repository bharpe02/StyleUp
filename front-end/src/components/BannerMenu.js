import React from 'react'
import logo from '../assets/images/LOGO.png'

function BannerMenu() {
  return (
    <div>
        {/**Container for the Banner Menu. 
         * NEEDS LOGO RESIZED, LOG IN, SIGN IN, CONDITIONAL "STATE" FOR SIGNED IN USER */}
        <svg width = "100vw" height = "10vh">
            <rect width = "100%" height = "100%" fill = 'white' />
        </svg> 
            {/**link to the homepage through the logo*/}          
            <a href="HomePage" target="_self" rel="noopener noreferrer">
                    <img src={logo} alt={""} style={homeLogoStyle}
                    width = '262' height = '85'
                    />
            </a>
        
    </div>
  )
}

const homeLogoStyle = {
    cursor: 'pointer',
    position: 'absolute', 
    top: "10px",
    left: "50px",
}


export default BannerMenu
