import React from 'react'
import logo from '../assets/images/LOGO.png'

function LogoButton() {
  return (
    <a href="HomePage" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={""} style={{ cursor: 'pointer'}}/>
    </a>
  )
}

export default LogoButton
