import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import injectContext from './context/appContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppWithContext = injectContext(App);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithContext />
  </React.StrictMode>
);