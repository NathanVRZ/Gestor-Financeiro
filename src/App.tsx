import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TransactionForm } from './components/TransactionForm';
import { TransactionsList } from './components/TransactionsList';
import { GoalsList } from './components/GoalsList';
import { GoalForm } from './components/GoalForm';
import { FinancialAlert } from './components/FinancialAlert';
import { Transaction, Goal } from './types/finance';
import { getFromLocalStorage, saveToLocalStorage } from './utils/storage';
import {
  calculateMonthlyExpenses,
  calculateAverageMonthlyExpenses,
  checkFinancialHealth
} from './utils/alerts';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => 
    getFromLocalStorage('transactions') || []
  );
  
  const [goals, setGoals] = useState<Goal[]>(() => 
    getFromLocalStorage('goals') || []
  );

  useEffect(() => {
    saveToLocalStorage('transactions', transactions);
  }, [transactions]);

  useEffect(() => {
    saveToLocalStorage('goals', goals);
  }, [goals]);

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions(prev => [transaction, ...prev]);
  };

  const handleAddGoal = (goal: Goal) => {
    setGoals(prev => [...prev, goal]);
  };

  const handleUpdateGoal = (updatedGoal: Goal) => {
    setGoals(prev => prev.map(goal => 
      goal.id === updatedGoal.id ? updatedGoal : goal
    ));
  };

  const handleDeleteGoal = (goalId: string) => {
    setGoals(prev => prev.filter(goal => goal.id !== goalId));
  };

  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expenses;
  const monthlyExpenses = calculateMonthlyExpenses(transactions);
  const averageMonthlyExpenses = calculateAverageMonthlyExpenses(transactions);
  const financialHealth = checkFinancialHealth(balance, monthlyExpenses, averageMonthlyExpenses);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <FinancialAlert status={financialHealth.status} message={financialHealth.message} />
        <Dashboard transactions={transactions} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <TransactionsList transactions={transactions} />
            <GoalsList
              goals={goals}
              onUpdateGoal={handleUpdateGoal}
              onDeleteGoal={handleDeleteGoal}
            />
          </div>
          
          <div className="space-y-6">
            <TransactionForm onAddTransaction={handleAddTransaction} />
            <GoalForm onAddGoal={handleAddGoal} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;