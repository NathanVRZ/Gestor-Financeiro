import React from 'react';
import { Wallet } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wallet size={24} />
          <h1 className="text-xl font-bold">Minhas Finanças</h1>
        </div>
      </div>
    </header>
  );
}