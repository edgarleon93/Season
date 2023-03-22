import React from 'react';
import ReactDOM from 'react-dom/client';
import { MessageSquare, UserPlus } from 'react-feather';
import './style.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Navbar } from './components/Navbar';
import Button from './components/Buttons/Button';
import InviteButton from './components/Buttons/InviteButton';
import ButtonComponent from './components/Buttons/IconButton';
import IconBUtton from './components/Buttons/IconButton';
import Publication from './components/Publication';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Button" element={<Button variant="primary">continue</Button>} />
        <Route
          path="/InviteButton"
          element={<InviteButton onClick={() => console.log('yes')}></InviteButton>}
        />
        <Route path="/Heart" element={<IconBUtton type="heart"></IconBUtton>} />
        <Route path="/Publication" element={<Publication />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
