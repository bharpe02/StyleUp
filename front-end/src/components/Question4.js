import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/stylesheets/SurveyPage.css';

function Question4({ onAnswer }) {
  // State to keep track of the budget selection
  const [budget, setBudget] = useState(5); // Initialize to the minimum value

  const handleBudgetChange = (event) => {
    const newBudget = parseInt(event.target.value, 10);
    setBudget(newBudget); 
    onAnswer(newBudget); 
  };

  const displayBudget = () => {
    if (budget == 5) return "<= $5";
    if (budget == 500) return ">= $500";
    return `$${budget}`;
  }

  return (
    <div className="question-container">
      <h1>Question 4</h1>
      <h2>What is your budget?</h2>
      <input
        type="range"
        min="5"
        max="500"
        value={budget}
        onChange={handleBudgetChange}
        className="budget-slider"
      />
      <div className="budget-display">
        Selected Budget: ${budget}
      </div>
    </div>
  );
}

Question4.propTypes = {
  onAnswer: PropTypes.func.isRequired,
};

export default Question4;