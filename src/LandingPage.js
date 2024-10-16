import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate('/calculator');
  };

  return (
    <div className="landing-container">
      <h1>Welcome to the Car Loan EMI Calculator</h1>
      <p>Calculate your monthly car loan EMI easily!</p>
      <button onClick={goToCalculator} className="next-button">
        Next
      </button>
    </div>
  );
};

export default LandingPage;

