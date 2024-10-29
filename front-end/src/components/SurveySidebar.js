import React from 'react';
import '../assets/stylesheets/SurveySidebar.css';

function SurveySidebar({ currentQuestion }) {
  const totalQuestions = 5;
  const darkColor = '#660C0C'; // Dark brown color
  const lightColor = '#d3b4b4'; // Light brown color

  return (
    <div className="survey-sidebar">
      {[...Array(totalQuestions)].map((_, index) => (
        <div
          key={index}
          className="sidebar-item"
          style={{
            backgroundColor: index < currentQuestion ? darkColor : lightColor,
          }}
        ></div>
      ))}
    </div>
  );
}

export default SurveySidebar;