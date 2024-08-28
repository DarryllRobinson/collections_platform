import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader } from './Root';
import Layout from './components/generic/Layout';
import Home from './components/generic/Home';
import Boards from './features/Boards/Boards';
import RequireAuth from './components/generic/RequireAuth';
import Competitions from './features/Competitions/Competitions';
import { User } from './features/users';
import Play from './features/Play/Play';
import ErrorPage from './components/navigation/ErrorPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/boards/*',
        loader: rootLoader,
        element: (
          <RequireAuth>
            <Boards />
          </RequireAuth>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/play',
        element: (
          <RequireAuth>
            <Play />
          </RequireAuth>
        ),
      },
      {
        path: '/competitions/*',
        element: (
          <RequireAuth>
            <Competitions />
          </RequireAuth>
        ),
      },
      {
        path: '/user/*',
        element: <User />,
      },
    ],
  },

  { path: '*', element: <Root /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
