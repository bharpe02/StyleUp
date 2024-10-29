import React from 'react';
import '../assets/stylesheets/Question1.css';

function Question1({ onNext }) {
  return (
    <div className="question-container">
      <h2>Question 1</h2>
      <p>What type of place are you looking to design?</p>
      <div className="options">
        {['Bathroom', 'Kitchen', 'Living Room', 'College Dorm', 'Bedroom', 'Other: Specify'].map((item) => (
          <label key={item} className="option">
            <input type="radio" name="design-type" value={item} />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Question1;