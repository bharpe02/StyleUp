import React from 'react'
import '../assets/stylesheets/OpeningPage.css';
import BannerMenu from '../components/BannerMenu.js'
import GradientBackground from '../components/GradientBackground'
import { Link, useNavigate } from "react-router-dom";

function OpeningPage() {
  return (
    <div class="all">
        <BannerMenu />
        <div class="gradient">
        <GradientBackground />
        </div>
        <div class="GetStarted">
          Get Your Personalized Recomendations
        </div>
        <div class="GetStarted2">
          <Link to="/Survey">
            <button className="start-button">
              Start
            </button>
          </Link></div>
    </div>
  );
}

export default OpeningPage;
