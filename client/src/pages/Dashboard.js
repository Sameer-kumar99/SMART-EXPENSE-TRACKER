import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../store/transactionSlice';
import ChartView from '../components/ChartView';
import TransactionTable from '../components/TransactionTable';

export default function Dashboard() {
  const dispatch = useDispatch();
  const transactions = useSelector(s => s.transactions);
  useEffect(() => { dispatch(fetchTransactions()); }, [dispatch]);
  return (
    <div>
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <ChartView transactions={transactions} />
      <TransactionTable transactions={transactions.slice(0,5)} />
    </div>
  );
}
