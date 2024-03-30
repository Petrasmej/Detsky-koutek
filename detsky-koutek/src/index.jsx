import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './global.css';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { Contact } from './pages/Contact/Contact';
import { About } from './pages/About/About';
import { Outlet } from 'react-router-dom';
import { CentersPage } from './pages/CentersPage/CentersPage';
import { CenterDetail } from './components/centerDetail/CenterDetail';

const App = () => {
  return (
    <div className="container">
      <h1>Detsky koutek</h1>
      <nav>
        <Link to="/Onas">O nas</Link>
        <span> | </span>
        <Link to="/Kontakt">Kontakt</Link>
        <span> | </span>
        <Link to="/Pobocky">Pobocky</Link>
        <Outlet />
      </nav>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/Onas',
        element: <About />,
      },
      {
        path: '/Kontakt',
        element: <Contact />,
      },
      {
        path: '/Pobocky',
        element: <CentersPage />,
        children: [
          {
            path: ':centerId',
            element: <CenterDetail />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
