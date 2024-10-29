import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question1 from '../components/Question1';
import Question2 from '../components/Question2';
import LogoButton from '../components/LogoButton.js';
import '../assets/stylesheets/Question1.css';

function SurveyPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, 5));
  };

  const handlePrevious = () => {
    if (currentQuestion === 1) {
      navigate('/HomePage'); // Navigate back to the home page if on the first question
    } else {
      setCurrentQuestion((prev) => prev - 1); // Otherwise, go to the previous question
    }
  };

  return (
    <div className="survey-page">
      <LogoButton />
      <div className="main-content">
        {currentQuestion === 1 && <Question1 />}
        {currentQuestion === 2 && <Question2 />}
        {/* Add more questions similarly */}
        <div className="nav-buttons">
          <button className="back-button" onClick={handlePrevious}>
            ←
          </button>
          <button className="next-button" onClick={handleNext} disabled={currentQuestion === 5}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SurveyPage;