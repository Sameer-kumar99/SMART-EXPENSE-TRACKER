import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotals } from '../store/householdSlice';
import api from '../services/api';

export default function Household() {
  const dispatch = useDispatch();
  const total = useSelector(s => s.household.total);
  const [budget, setBudget] = useState('');

  useEffect(() => { dispatch(fetchTotals()); }, [dispatch]);

  const updateBudget = async e => {
    e.preventDefault();
    await api.put('/household/budget', { budget });
    dispatch(fetchTotals());
    setBudget('');
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Household</h1>
      <p>Total spent: ${total.toFixed(2)}</p>
      <form onSubmit={updateBudget} className="mt-4 space-x-2">
        <input value={budget} onChange={e => setBudget(e.target.value)} placeholder="Budget" className="border p-2" />
        <button className="bg-blue-500 text-white px-4 py-2">Set Budget</button>
      </form>
    </div>
  );
}
