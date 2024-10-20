import React from 'react'
import logo from '../assets/images/LOGO.png'

function BannerMenu() {
  return (
    <div>
        <svg width = "100vw" height = "200">
            <rect width = "100%" height = "100%" fill = '#f0f0f0'/>
        </svg> 
        
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
    left: "50px"
}


export default BannerMenu
