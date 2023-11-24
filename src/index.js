import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './routes';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductProvider from './api/ProductContext';
import CartProvider from './api/CartContext';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <ProductProvider>
  <React.StrictMode>
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
    <App />
    <Router/>
    </QueryClientProvider>
  </ThemeProvider>
</React.StrictMode>
</ProductProvider>
</CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
