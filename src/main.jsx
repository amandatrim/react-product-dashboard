import React from 'react';
import ReactDOM from 'react-dom/client';
/* Import app from the app module */
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* Render the app under react strict mode */}
        <App />
    </React.StrictMode>
);
