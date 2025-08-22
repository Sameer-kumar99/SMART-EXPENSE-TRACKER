import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../store/transactionSlice';
import OCRUpload from '../components/OCRUpload';

export default function AddTransaction() {
  const [form, setForm] = useState({ amount: '', category: '', date: '', description: '' });
  const dispatch = useDispatch();

  const onParsed = data => {
    setForm({
      amount: data.amount || '',
      category: '',
      date: data.date ? data.date.substring(0,10) : '',
      description: data.vendor || ''
    });
  };

  const submit = async e => {
    e.preventDefault();
    await dispatch(addTransaction(form));
    setForm({ amount: '', category: '', date: '', description: '' });
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Add Transaction</h1>
      <OCRUpload onParsed={onParsed} />
      <form onSubmit={submit} className="space-y-2 mt-4">
        <input value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} placeholder="Amount" className="border p-2 w-full" />
        <input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} placeholder="Category" className="border p-2 w-full" />
        <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="border p-2 w-full" />
        <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Description" className="border p-2 w-full" />
        <button className="bg-blue-500 text-white px-4 py-2">Save</button>
      </form>
    </div>
  );
}
