import React from 'react'
import logo from '../assets/images/LOGO.png'

function LogoButton() {
  return (
    <Link to="/MyRooms">
        <img src={logo} alt={""} style={{position: 'fixed', top: 0, left: 130, height: '100px', cursor: 'pointer'}}/>
    </Link>
  )
}

export default LogoButton
