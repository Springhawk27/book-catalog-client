import App from '@/App';
import Books from '@/pages/Books';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
