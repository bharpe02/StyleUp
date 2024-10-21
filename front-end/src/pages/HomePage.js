import React from 'react'
import '../assets/stylesheets/HomePage.css';
import LogoButton from '../components/LogoButton.js';
import Sidebar from '../components/Sidebar.js';

function HomePage() {
  return (
    <div>
        <div style={{ position: 'fixed', top: 0, left: 130, width: '100%', height: '100px'}}>
            <LogoButton />
        </div>
        <div id="SidebarDiv" style={{ marginTop: '100px' }}>
            <Sidebar />
        </div>
    </div>
  );
}

export default HomePage;