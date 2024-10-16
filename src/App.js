import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import CarLoanEMICalculator from './CarLoanEMICalculator';
import './styles.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/calculator" element={<CarLoanEMICalculator />} />
    </Routes>
  );
};

export default App;
