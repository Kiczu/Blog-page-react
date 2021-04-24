import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export { default as Navigation } from "./components/Navigation";
export { default as Footer } from "./components/Footer";
export { default as Home } from "./components/Home";
export { default as Blog } from "./components/Blog";
export { default as Contact } from "./components/Contact";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
