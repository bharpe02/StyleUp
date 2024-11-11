import React from 'react';
import '../assets/stylesheets/SurveyPage.css';
import PropTypes from 'prop-types';

function Question2({ onAnswer }) {
  const handleSelectColor = (color) => {
    onAnswer(color);
  };

  return (
    <div className="question-container">
      <h1>Question 2</h1>
      <h2>What is your color preference?</h2>
      <div className="color-options">
        {['#000000', '#4d0000', '#e27602', '#FCCF55', '#315e26', '#023E8A', '#FFFFFF'].map((color) => (
          <button 
          key={color} 
          className="color-option" 
          style={{ backgroundColor: color }}
          onClick={() => handleSelectColor(color)}
          > 
          </button>
        ))}
      </div>
      
    </div>
  );
}

// Add prop types validation
Question2.propTypes = {
  onAnswer: PropTypes.func.isRequired,
};

export default Question2;