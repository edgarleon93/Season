import { Routes, Route, Router, Navigate } from 'react-router-dom';

import LogIn from './page/LogIn';
import Index from './page/Index';

import { Home } from './page/Home';
import { Register } from './page/Register';
import SearchFollowers from './page/SearchFollowers';

import Profile from './page/Profile';
import { useEffect, useState } from 'react';
import { LoginForm } from './components/LogIn/LoginForm';

// [NOTE]: Secrets in the vite and react app
// console.log('import.meta.env.VITE_FRONTEND_URL', import.meta.env.VITE_FRONTEND_URL);
// console.log('import.meta.env.VITE_BACKEND_URL', import.meta.env.VITE_BACKEND_URL);
// console.log(
//   'import.meta.env.SUPER_SECRET_NOT_PREFIXED',
//   import.meta.env.SUPER_SECRET_NOT_PREFIXED,
// );
export default function App(): any {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
  };

  return (
    <Routes>
      {/* [NOTE]: Use the token from Login to protect all other routes on the frontend.  */}
      <Route path="/" element={<Index />} />

      <Route path="/login" element={<LogIn onLoginSuccess={handleLoginSuccess} />} />

      <Route path="/register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/search" element={<SearchFollowers />} />

      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
