import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './contex/CartContex';
import {AddProvider } from './contex/addContex'
import { ScrollToTop } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AddProvider>
    <CartProvider>
    <ScrollToTop/>
    <ToastContainer closeButton={false}/>
    <App />
    </CartProvider>
    </AddProvider>
    </Router>
    
  </React.StrictMode>
);

