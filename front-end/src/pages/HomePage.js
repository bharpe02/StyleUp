import React from 'react'
import '../assets/stylesheets/HomePage.css';
import Sidebar from '../components/Sidebar.js';
import BannerMenu from '../components/BannerMenu.js';

function HomePage() {
  return (
    <div>
        <BannerMenu/>
        <Sidebar/>
        <h1 style={{ textAlign: 'center'}}>Home Page</h1>
    </div>
  );
}

export default HomePage;