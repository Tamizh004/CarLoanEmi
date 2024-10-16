import React, { useState } from 'react';
import './styles.css';

const CarLoanEMICalculator = () => {
  const [carPrice, setCarPrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [loanYears, setLoanYears] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalPaid, setTotalPaid] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEMI = () => {
    const principal = carPrice - downPayment;
    const interest = interestRate / 100 / 12;
    const numberOfMonths = loanYears * 12;

    const emiValue = (principal * interest * Math.pow(1 + interest, numberOfMonths)) / 
                     (Math.pow(1 + interest, numberOfMonths) - 1);
    
    const totalPayment = emiValue * numberOfMonths;
    const totalInt = totalPayment - principal;

    setEmi(emiValue.toFixed(2));
    setTotalPaid(totalPayment.toFixed(2));
    setTotalInterest(totalInt.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h2>Car Loan EMI Calculator</h2>
      <div className="calculator-inputs">
        <label>Total Price of Car:</label>
        <input 
          type="number" 
          value={carPrice} 
          onChange={(e) => setCarPrice(e.target.value)} 
        />
        
        <label>Down Payment:</label>
        <input 
          type="number" 
          value={downPayment} 
          onChange={(e) => setDownPayment(e.target.value)} 
        />
        
        <label>Loan Tenure (in years):</label>
        <input 
          type="number" 
          value={loanYears} 
          onChange={(e) => setLoanYears(e.target.value)} 
        />
        
        <label>Interest Rate (per annum):</label>
        <input 
          type="number" 
          value={interestRate} 
          onChange={(e) => setInterestRate(e.target.value)} 
        />
        
        <button onClick={calculateEMI} className="calculate-button">Calculate EMI</button>

        {emi && (
          <div className="results">
            <h3>Results:</h3>
            <p>Monthly EMI: ₹{emi}</p>
            <p>Total Amount Paid: ₹{totalPaid}</p>
            <p>Total Interest Paid: ₹{totalInterest}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarLoanEMICalculator;

