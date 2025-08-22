import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../store/transactionSlice';
import TransactionTable from '../components/TransactionTable';

export default function Transactions() {
  const dispatch = useDispatch();
  const transactions = useSelector(s => s.transactions);
  useEffect(() => { dispatch(fetchTransactions()); }, [dispatch]);
  return (
    <div>
      <h1 className="text-2xl mb-4">Transactions</h1>
      <TransactionTable transactions={transactions} />
    </div>
  );
}
