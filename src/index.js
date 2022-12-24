import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

import { ThemeProvider } from '@material-tailwind/react';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter router={router}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
