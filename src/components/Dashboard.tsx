import React from 'react';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';
import { Transaction } from '../types/finance';

interface DashboardProps {
  transactions: Transaction[];
}

export function Dashboard({ transactions }: DashboardProps) {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Saldo Total</p>
            <p className="text-2xl font-bold">R$ {balance.toFixed(2)}</p>
          </div>
          <DollarSign className="text-indigo-600" size={24} />
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Receitas</p>
            <p className="text-2xl font-bold text-green-600">R$ {income.toFixed(2)}</p>
          </div>
          <TrendingUp className="text-green-600" size={24} />
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Despesas</p>
            <p className="text-2xl font-bold text-red-600">R$ {expenses.toFixed(2)}</p>
          </div>
          <TrendingDown className="text-red-600" size={24} />
        </div>
      </div>
    </div>
  );
}