import { Routes, Route } from 'react-router-dom';
import Register from './page/register';
import LogIn from './page/LogIn';
import Index from './page/Index';
import { useState } from 'react';
import { hasAuthenticated } from './services/AuthAPI';
import { AuthContext } from './contexts/Auth';
import EditProfile from './components/userProfile/EditProfile';
import RequireAuth from './components/RequireAuth';

// [NOTE]: Secrets in the vite and react app
// console.log('import.meta.env.VITE_FRONTEND_URL', import.meta.env.VITE_FRONTEND_URL);
// console.log('import.meta.env.VITE_BACKEND_URL', import.meta.env.VITE_BACKEND_URL);
// console.log(
//   'import.meta.env.SUPER_SECRET_NOT_PREFIXED',
//   import.meta.env.SUPER_SECRET_NOT_PREFIXED,
// );
function App() {
  const [isAuthenticated] = useState(hasAuthenticated());
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      <div className="flex-1">
        <Routes>
          {/* [NOTE]: Use the token from Login to protect all other routes on the frontend.  */}
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
    </AuthContext.Provider>
  );
}

export default App;
