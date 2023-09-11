import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './pages/Root';
import ListPage from './pages/List';
import NewFormPage from './pages/NewForm';
import EditFormPage from './pages/EditForm';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ListPage /> },
      { path: 'newform', element: <NewFormPage /> },
      { path: ':eventId', element: <EditFormPage /> }
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;