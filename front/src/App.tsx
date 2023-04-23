import { Routes, Route, useRoutes, Router } from 'react-router-dom';
import LogIn from './page/LogIn';
import Index from './page/Index';
import { Home } from './page/Home';
import { Register } from './page/register';
import SearchFollowers from './page/SearchFollowers';
import Profile from './page/Profile';
import React, { useEffect, useState } from 'react';
import { ProtectedRoute } from './services/privateRoute';
import { Sidebar } from './components/Sidebar/Sidebar';
import { UserAvatar } from './components/avatar/UserAvatar';
import { AuthContext } from './contexts/authContext';

// [NOTE]: Secrets in the vite and react app
// console.log('import.meta.env.VITE_FRONTEND_URL', import.meta.env.VITE_FRONTEND_URL);
// console.log('import.meta.env.VITE_BACKEND_URL', import.meta.env.VITE_BACKEND_URL);
// console.log(
//   'import.meta.env.SUPER_SECRET_NOT_PREFIXED',
//   import.meta.env.SUPER_SECRET_NOT_PREFIXED,
// );
export default function App(): any {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState(() => localStorage.getItem('userId') || '');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
  };
  const handleRegisterSuccess = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
  };
  const isAuthenticated = Boolean(token);

  return (
    <AuthContext.Provider value={{ token, setToken, userId, setUserId }}>
      <Routes>
        <Route path="/" element={<Index />} />

        {/* <Route path="/avatar" element={<UserAvatar setAvatar={Boolean} />} /> */}

        <Route path="/login" element={<LogIn onLoginSuccess={handleLoginSuccess} />} />
        <Route
          path="/register"
          element={<Register onRegisterSucces={handleRegisterSuccess} />}
        />
        <Route
          path="/avatar"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<UserAvatar setAvatar={Boolean} />} />
        </Route>
        <Route
          path="/home/*"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<Home />} />
        </Route>
        <Route
          path="/search/*"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<SearchFollowers />} />
        </Route>
        <Route
          path="/profile/*"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}
