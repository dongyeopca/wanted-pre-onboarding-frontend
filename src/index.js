import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './Pages/Auth';
import Todo from './Pages/Todo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  { path: '/', element: <h1>Wanted Pre-Onboarding Intership Assignment</h1> },
  { path: '/signup', element: <Auth /> },
  { path: '/signin', element: <Auth /> },
  { path: '/todo', element: <Todo /> },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
