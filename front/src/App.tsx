import { Routes, Route } from 'react-router-dom';
import Register from './page/register';
import LogIn from './page/LogIn';
import Index from './page/Index';
import { useState } from 'react';
import { hasAuthenticated } from './services/AuthAPI';
import Auth from './contexts/Auth';
import EditProfile from './components/userProfile/EditProfile';
import RequireAuth from './components/RequireAuth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <EditProfile />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </Auth.Provider>
  );
}

export default App;
