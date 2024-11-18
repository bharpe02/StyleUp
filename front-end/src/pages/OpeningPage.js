import React, { useContext } from 'react'
import '../assets/stylesheets/OpeningPage.css';
import BannerMenu from '../components/BannerMenu.js'
import GradientBackground from '../components/GradientBackground'
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext.js';
import Sidebar from '../components/Sidebar.js'

function OpeningPage() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="all">
        <BannerMenu />
        {isLoggedIn ? <Sidebar/> : null}
        <div className="gradient">
        <GradientBackground />
        </div>
        <div className="GetStarted">
          Get Your Personalized Recomendations
        </div>
        <div className="GetStarted2">
          <Link to="/Survey">
            <button className="start-button">
              Start
            </button>
          </Link></div>
    </div>
  );
}

export default OpeningPage;
