import React from 'react'
import '../assets/stylesheets/HomePage.css';
import LogoButton from '../components/LogoButton.js';
import Sidebar from '../components/Sidebar.js';

function HomePage() {
  return (
    <div>
        {/** 
        <div>
            <LogoButton />
        </div>
        */}
        <div id="SidebarDiv">
            <Sidebar />
            
        </div>
    </div>
  );
}

export default HomePage;