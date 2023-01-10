import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Projetos from './pages/Projetos'
import NovoProjeto from './pages/NovoProjeto'
import EditarProjeto from './pages/EditarProjeto'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './pages/layouts/header';

const router = createBrowserRouter([
  {
    exact: true,
    path: "/",
    element: <Home />,
  },
  {
    path: "/empresa",
    element: <Empresa />,
  },
  {
    path: "/contato",
    element: <Contato />
  },
  {
    path: '/projetos',
    element: <Projetos />
  },
  {
    path: '/novoProjeto',
    element: <NovoProjeto />
  },
  {
    path: '/editar/:idProjeto',
    element: <EditarProjeto />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
