import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import HomePage from './page/HomePage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
