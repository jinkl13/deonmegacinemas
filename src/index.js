import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set document title
document.title = "Deon Mega Cinemas";

// Set favicon
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.href = '../public/deon-logo-1.png'; // Adjust path as necessary
document.head.appendChild(favicon);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
