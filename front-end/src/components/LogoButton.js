import React from 'react'
import logo from '../assets/images/LOGO.png'

function LogoButton() {
  return (
    <a href="HomePage" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={""} style={{position: 'fixed', top: 0, left: 130, height: '50px', cursor: 'pointer'}}/>
    </a>
  )
}

export default LogoButton
