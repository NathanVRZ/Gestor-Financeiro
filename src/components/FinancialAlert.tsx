import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface FinancialAlertProps {
  status: 'good' | 'warning' | 'danger';
  message: string;
}

export function FinancialAlert({ status, message }: FinancialAlertProps) {
  const getAlertStyle = () => {
    switch (status) {
      case 'danger':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'good':
        return 'bg-green-100 text-green-800 border-green-300';
    }
  };

  return (
    <div className={`p-4 mb-6 rounded-lg border ${getAlertStyle()} flex items-center gap-2`}>
      {status === 'good' ? (
        <CheckCircle className="flex-shrink-0" size={20} />
      ) : (
        <AlertTriangle className="flex-shrink-0" size={20} />
      )}
      <p className="font-medium">{message}</p>
    </div>
  );
}