import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Empresa from './pages/Empresa/index'
import reportWebVitals from './reportWebVitals';
import Header from './components/header/index';
import {createBrowserRouter, RouterProvider, Router} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/empresa",
    element: <Empresa />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router location={history.location} navigator={history}>
      <Header/>
      <RouterProvider router={router} />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
