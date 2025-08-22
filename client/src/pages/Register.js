import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async e => {
    e.preventDefault();
    await dispatch(registerUser({ username, email, password }));
    navigate('/dashboard');
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-10 space-y-4">
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="w-full p-2 border" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border" />
      <button className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
  );
}
