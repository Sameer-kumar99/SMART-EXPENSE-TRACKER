import React from 'react';

export default function TransactionTable({ transactions }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="border px-4 py-2">Date</th>
          <th className="border px-4 py-2">Category</th>
          <th className="border px-4 py-2">Amount</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(tx => (
          <tr key={tx._id}>
            <td className="border px-4 py-2">{new Date(tx.date).toLocaleDateString()}</td>
            <td className="border px-4 py-2">{tx.category}</td>
            <td className="border px-4 py-2">${tx.amount.toFixed(2)}</td>
            <td className="border px-4 py-2">{tx.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
