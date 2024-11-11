import React from 'react';
import '../assets/stylesheets/SurveyPage.css';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

function SurveySidebar({ currentQuestion }) {
  const totalQuestions = 5;
  const darkColor = '#660C0C'; // Dark brown color
  const lightColor = '#d3b4b4'; // Light brown color

  const sidebarItems = useMemo(() =>
    Array.from({ length: totalQuestions }, (_, index) => ({
      key: `question-${index}`,
      color: index < currentQuestion ? darkColor : lightColor,
    }))
  , [currentQuestion, totalQuestions]);

  return (
    <div className="survey-sidebar">
      {sidebarItems.map(({ key, color }) => (
        <div
          key={key}
          className="sidebar-item"
          style={{
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
}

// Add PropTypes validation
SurveySidebar.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
};

export default SurveySidebar;