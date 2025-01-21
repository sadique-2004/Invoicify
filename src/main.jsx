import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css'; // Ensure your global styles are included here
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
