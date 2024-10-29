import React from 'react';
import '../assets/stylesheets/Question2.css';

function Question2({ onNext, onPrevious }) {
  return (
    <div className="question-container">
      <h2>Question 2</h2>
      <p>What is your color preference?</p>
      <div className="color-options">
        {['#FF0000', '#FFA500', '#FFFF00', '#7FFF00', '#00FF00'].map((color) => (
          <div key={color} className="color-option" style={{ backgroundColor: color }}></div>
        ))}
      </div>
      
    </div>
  );
}

export default Question2;