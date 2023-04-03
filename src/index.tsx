import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './print.css';
import './antd-overrides.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();