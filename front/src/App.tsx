import { Routes, Route, Router } from 'react-router-dom';

import LogIn from './page/LogIn';
import Index from './page/Index';
import { Navbar } from './components/Navbar';
import { Home } from './page/Home';
import { AuthProvider, useAuth } from './contexts/Auth';

import { Register } from './page/register';
import SearchFollowers from './page/SearchFollowers';
import { SearchProvider } from './contexts/SearchContext';
import Profile from './page/Profile';
import Publication from './components/Publication';
import { PostsProvider } from './contexts/PostContext';

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
      <Route path="/Home" element={<Home />} />
      <Route path="/search" element={<SearchFollowers />} />
      <Route
        path="/Publication"
        element={
          <PostsProvider>
            <Publication />
          </PostsProvider>
        }
      />

      <Route path="/navbar" element={<Navbar />} />
      <Route path="/Profile/:username" element={<Profile />} />
    </Routes>
  );
}
