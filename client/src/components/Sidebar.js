import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-200 min-h-screen p-4">
      <ul className="space-y-2">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/add">Add Transaction</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/household">Household</Link></li>
      </ul>
    </aside>
  );
}
