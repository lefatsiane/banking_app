import React, { useState } from "react";

const BankBalance = () => {
  const [balance, setBalance] = useState(0); // Initial balance
  const [depositAmount, setDepositAmount] = useState(0); // Input for deposit amount
  const [withdrawAmount, setWithdrawAmount] = useState(0); // Input for withdrawal amount
  const [interestRate, setInterestRate] = useState(0); // Input for interest rate
  const [feesType, setFeesType] = useState("fixed"); // Fees type: 'fixed' or 'percentage'
  const [feesAmount, setFeesAmount] = useState(0); // Input for fees amount

  const handleDeposit = () => {
    // Simulate deposit (increase balance)
    setBalance(balance + depositAmount);
    setDepositAmount(0); // Clear the input field after deposit
  };

  const handleWithdraw = () => {
    // Simulate withdrawal (decrease balance)
    setBalance(balance - withdrawAmount);
    setWithdrawAmount(0); // Clear the input field after withdrawal
  };

  const handleAddInterest = () => {
    // Calculate interest amount based on the interest rate
    const interestAmount = (balance * interestRate) / 100;
    // Add interest to the balance
    setBalance(balance + interestAmount);
  };

  const handleChargeFees = () => {
    if (feesType === "fixed") {
      // Deduct fixed fees from the balance
      setBalance(balance - feesAmount);
    } else if (feesType === "percentage") {
      // Calculate fees amount based on the percentage
      const fees = (balance * feesAmount) / 100;
      // Deduct fees from the balance
      setBalance(balance - fees);
    }
  };

  return (
    <div>
      <h1>Not FNB Banking App</h1>
      <p>Current Balance: R{balance}</p>

      {/* Deposit input */}
      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(Number(e.target.value))}
        placeholder="Enter deposit amount"
      />
      <button onClick={handleDeposit}>Deposit</button>

      {/* Withdrawal input */}
      <input
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(Number(e.target.value))}
        placeholder="Enter withdrawal amount"
      />
      <button onClick={handleWithdraw}>Withdraw</button>

      {/* Interest input */}
      <input
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
        placeholder="Enter interest rate (%)"
      />
      <button onClick={handleAddInterest}>Add Interest</button>

      {/* Fees input */}
      <input
        type="number"
        value={feesAmount}
        onChange={(e) => setFeesAmount(Number(e.target.value))}
        placeholder="Enter fees amount"
      />
      <select value={feesType} onChange={(e) => setFeesType(e.target.value)}>
        <option value="fixed">Fixed Fees</option>
        <option value="percentage">Percentage Fees</option>
      </select>
      <button onClick={handleChargeFees}>Charge Bank Fees</button>
    </div>
  );
};

export default BankBalance;
