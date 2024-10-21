import React from 'react';
import LogoButton from '../components/LogoButton.js';
import Sidebar from '../components/Sidebar.js';

function SurveyPage() {
  return (
    <div>
      <LogoButton/>
      <Sidebar/>
      <h1 style={{ textAlign: 'center' }}>Survey Page</h1>
    </div>
  );
}

export default SurveyPage;