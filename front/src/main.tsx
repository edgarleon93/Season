import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import HomePage from './page/HomePage';

// [NOTE]: Secrets in the vite and react app
// console.log('import.meta.env.VITE_FRONTEND_URL', import.meta.env.VITE_FRONTEND_URL);
// console.log('import.meta.env.VITE_BACKEND_URL', import.meta.env.VITE_BACKEND_URL);
// console.log(
//   'import.meta.env.SUPER_SECRET_NOT_PREFIXED',
//   import.meta.env.SUPER_SECRET_NOT_PREFIXED,
// );

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <App />
=======
      <Routes>
        <Route path="/LogIn" element={<Log />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* [NOTE]: Use the token from Login to protect all other routes on the frontend.  */}
        <Route path="/homePage" element={<HomePage />} />

        <Route path="/AvatarPicModif" element={<AvatarPicModif />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Button" element={<Button variant="primary">continue</Button>} />
        <Route
          path="/InviteButton"
          element={<InviteButton onClick={() => console.log('yes')}></InviteButton>}
        />
        <Route path="/Heart" element={<IconBUtton type="heart"></IconBUtton>} />

        <Route path="/TweetBox" element={<TweetBox />} />

        <Route path="/" element={<Index />} />

        <Route path="/Publication" element={<Publication />} />
      </Routes>
>>>>>>> 2c6c7d5b08124e7e3c7cbe8471cc6a05fdab2594
    </BrowserRouter>
  </React.StrictMode>,
);
