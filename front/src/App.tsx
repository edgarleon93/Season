import { Routes, Route, Router } from 'react-router-dom';

import LogIn from './page/LogIn';
import Index from './page/Index';
import { Navbar } from './components/Navbar';
import HomePage from './page/HomePage';
import { AuthProvider, useAuth } from './contexts/Auth';
import SearchContainer from './components/search/SearchContainer';
import { Register } from './page/Register';

// [NOTE]: Secrets in the vite and react app
// console.log('import.meta.env.VITE_FRONTEND_URL', import.meta.env.VITE_FRONTEND_URL);
// console.log('import.meta.env.VITE_BACKEND_URL', import.meta.env.VITE_BACKEND_URL);
// console.log(
//   'import.meta.env.SUPER_SECRET_NOT_PREFIXED',
//   import.meta.env.SUPER_SECRET_NOT_PREFIXED,
// );
export default function App() {
  // const { authState, onLogout } = useAuth();
  return (
    <Routes>
      {/* [NOTE]: Use the token from Login to protect all other routes on the frontend.  */}

      <Route path="/" element={<Index />} />

      <Route path="/login" element={<LogIn />} />

      <Route path="/register" element={<Register />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/search" element={<SearchContainer isOpen />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
  );
}
