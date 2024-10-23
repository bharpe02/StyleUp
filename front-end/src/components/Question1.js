import React from 'react';
import '../assets/stylesheets/Question1.css';
import PropTypes from 'prop-types';

function Question1({ onAnswer }) {
  const handleChange = (event) => {
    onAnswer(event.target.value);
  }
  
  return (
    <div className="question-container">
      <h2>Question 1</h2>
      <p>What type of place are you looking to design?</p>
      <div className="options">
        {['Bathroom', 'Kitchen', 'Living Room', 'College Dorm', 'Bedroom', 'Other: Specify'].map((item) => (
          <label key={item} className="option">
            <input 
            type="radio" 
            name="design-type" 
            value={item} 
            onChange={handleChange}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}

// Add prop types validation
Question1.propTypes = {
  onAnswer: PropTypes.func.isRequired,
};

export default Question1;