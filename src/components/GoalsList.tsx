import React, { useState } from 'react';
import { Target, Pencil, Trash2, Check, X } from 'lucide-react';
import { Goal } from '../types/finance';

interface GoalsListProps {
  goals: Goal[];
  onUpdateGoal: (goal: Goal) => void;
  onDeleteGoal: (goalId: string) => void;
}

export function GoalsList({ goals, onUpdateGoal, onDeleteGoal }: GoalsListProps) {
  const [editingGoal, setEditingGoal] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Goal | null>(null);

  const handleEdit = (goal: Goal) => {
    setEditingGoal(goal.id);
    setEditForm(goal);
  };

  const handleSave = () => {
    if (editForm) {
      onUpdateGoal(editForm);
      setEditingGoal(null);
      setEditForm(null);
    }
  };

  const handleCancel = () => {
    setEditingGoal(null);
    setEditForm(null);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Target size={20} />
        Minhas Metas
      </h2>
      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="border p-4 rounded-lg">
            {editingGoal === goal.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editForm?.title}
                  onChange={(e) => setEditForm(prev => prev ? {...prev, title: e.target.value} : prev)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={editForm?.targetAmount}
                    onChange={(e) => setEditForm(prev => prev ? {...prev, targetAmount: Number(e.target.value)} : prev)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <input
                    type="number"
                    value={editForm?.currentAmount}
                    onChange={(e) => setEditForm(prev => prev ? {...prev, currentAmount: Number(e.target.value)} : prev)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <input
                  type="date"
                  value={editForm?.deadline}
                  onChange={(e) => setEditForm(prev => prev ? {...prev, deadline: e.target.value} : prev)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    <Check size={16} />
                    Salvar
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-1 px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                  >
                    <X size={16} />
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{goal.title}</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(goal)}
                      className="p-1 text-gray-600 hover:text-indigo-600"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => onDeleteGoal(goal.id)}
                      className="p-1 text-gray-600 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-indigo-600">
                        {((goal.currentAmount / goal.targetAmount) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block">
                        R$ {goal.currentAmount.toFixed(2)} / R$ {goal.targetAmount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-indigo-200">
                    <div
                      style={{ width: `${(goal.currentAmount / goal.targetAmount) * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                    ></div>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    Prazo: {new Date(goal.deadline).toLocaleDateString()}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}