import { Transaction } from '../types/finance';

export const calculateMonthlyExpenses = (transactions: Transaction[]): number => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  
  return transactions
    .filter(t => {
      const transactionDate = new Date(t.date);
      return t.type === 'expense' &&
             transactionDate.getMonth() === currentMonth &&
             transactionDate.getFullYear() === currentYear;
    })
    .reduce((acc, curr) => acc + curr.amount, 0);
};

export const calculateAverageMonthlyExpenses = (transactions: Transaction[]): number => {
  const expenses = transactions.filter(t => t.type === 'expense');
  if (expenses.length === 0) return 0;

  const dates = expenses.map(t => new Date(t.date));
  const minDate = new Date(Math.min(...dates.map(d => d.getTime())));
  const maxDate = new Date(Math.max(...dates.map(d => d.getTime())));
  
  const monthsDiff = (maxDate.getFullYear() - minDate.getFullYear()) * 12 +
                    (maxDate.getMonth() - minDate.getMonth()) + 1;
  
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  return totalExpenses / monthsDiff;
};

export const checkFinancialHealth = (
  balance: number,
  monthlyExpenses: number,
  averageMonthlyExpenses: number
): { status: 'good' | 'warning' | 'danger'; message: string } => {
  if (balance <= 0) {
    return {
      status: 'danger',
      message: 'Atenção! Sua conta está no vermelho!'
    };
  }

  if (monthlyExpenses > averageMonthlyExpenses * 1.2) {
    return {
      status: 'warning',
      message: 'Alerta! Seus gastos este mês estão 20% acima da média!'
    };
  }

  if (balance < averageMonthlyExpenses) {
    return {
      status: 'warning',
      message: 'Cuidado! Seu saldo está menor que a média mensal de gastos!'
    };
  }

  return {
    status: 'good',
    message: 'Suas finanças estão saudáveis!'
  };
};