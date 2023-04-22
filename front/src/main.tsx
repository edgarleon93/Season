import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SearchProvider } from './contexts/SearchContext';
import { PostsProvider } from './contexts/PostContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <PostsProvider>
          <App />
        </PostsProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
