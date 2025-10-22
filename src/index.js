import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css'; // Your main Tailwind CSS file
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the ThemeProvider
import { ThemeProvider } from './context/ThemeContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the entire app with the ThemeProvider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
