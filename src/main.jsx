import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App.jsx';
import { ClerkProvider, RedirectToSignIn } from '@clerk/clerk-react';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY?.trim();

if (!PUBLISHABLE_KEY) {
  throw new Error('VITE_CLERK_PUBLISHABLE_KEY is not defined');
}

console.log('Clerk Publishable Key:', PUBLISHABLE_KEY);

// Custom appearance for Clerk
const customAppearance = {
  elements: {
    formButtonPrimary: "bg-[#45ccb8] hover:bg-[#3cbda8] text-white", // Button styles
    card: "shadow-lg rounded-xl border border-gray-200", // Card styles
    headerTitle: "text-[#45ccb8] font-bold text-lg", // Header title styles
  },
  variables: {
    colorPrimary: "#45ccb8", // Primary color
    colorTextSecondary: "#3a3a3a", // Secondary text color
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={customAppearance} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </StrictMode>
);
