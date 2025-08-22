import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const dispatch = useDispatch();
  const token = useSelector(s => s.auth.token);
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/dashboard" className="font-bold">Expense Tracker</Link>
      {token && <button onClick={() => dispatch(logout())}>Logout</button>}
    </nav>
  );
}
