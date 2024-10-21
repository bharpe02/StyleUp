import React from 'react'
import '../assets/stylesheets/HomePage.css';
import LogoButton from '../components/LogoButton.js';
import Sidebar from '../components/Sidebar.js';

function HomePage() {
  return (
    <div>
        <LogoButton/>
        <Sidebar/>
        <h1 style={{ textAlign: 'center' }}>Home Page</h1>
    </div>
  );
}

export default HomePage;