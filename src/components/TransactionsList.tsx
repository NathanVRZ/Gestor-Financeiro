import React from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { Transaction } from '../types/finance';

interface TransactionsListProps {
  transactions: Transaction[];
}

export function TransactionsList({ transactions }: TransactionsListProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Transações Recentes</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 border rounded-lg"
          >
            <div className="flex items-center gap-3">
              {transaction.type === 'income' ? (
                <ArrowUpCircle className="text-green-500" />
              ) : (
                <ArrowDownCircle className="text-red-500" />
              )}
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                R$ {transaction.amount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(transaction.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}