import "./App.css";
import React, { useState } from "react";
// import BalanceDisplay from './src/com/BalanceDisplay';
import BalanceDisplay from "./components/BalanceDisplay";
import TransactionForm from "./components/TransactionForm";

const App = () => {
  const [balance, setBalance] = useState(0);

  const handleDeposit = (amount) => {
    setBalance(balance + amount);
  };

  const handleWithdraw = (amount) => {
    setBalance(balance - amount);
  };

  const handleInterest = (rate) => {
    setBalance(balance * (1 + rate / 100));
  };

  const handleFees = (fee) => {
    setBalance(balance - fee);
  };

  return (
    <div>
      <h1>Banking App</h1>
      <BalanceDisplay balance={balance} />
      <TransactionForm
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
        onInterest={handleInterest}
        onFees={handleFees}
      />
    </div>
  );
};

export default App;
