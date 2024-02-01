import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SwitchProvider } from './Hooks/SwithContext';
// import { PaginationProvider } from './Hooks/PaginationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <PaginationProvider>
  <SwitchProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </SwitchProvider>
    // </PaginationProvider>
);


