import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css'
import App from './App'; // Your App component

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Wrap your app in BrowserRouter */}
    <App />
  </BrowserRouter>
);
