import React, { useState } from 'react';

const TransactionForm = ({ onDeposit, onWithdraw }) => {
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleDeposit = () => {
    // Call the onDeposit function passed from the parent component
    onDeposit(depositAmount);
    setDepositAmount(0); // Clears the input field after deposit
  };

  const handleWithdraw = () => {
    // Call the onWithdraw function passed from the parent component
    onWithdraw(withdrawAmount);
    setWithdrawAmount(0); // Clears the input field after withdrawal
  };
};

export default TransactionForm;
