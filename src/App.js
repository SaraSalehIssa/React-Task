import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';

import { RootLayout } from './pages/Root';
import { ListPage } from './pages/List';
import { NewFormPage } from './pages/NewForm';
import { EditFormPage } from './pages/EditForm';
import { ErrorPage } from './pages/Error';
import { SignUpPage } from './pages/SignUp';
import { LoginPage } from './pages/Login';
import { ForgotPasswordPage } from './pages/ForgotPassword';
import { UpdateProfilePage } from './pages/UpdateProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SignUpPage /> },
      { path: 'list', element: <ListPage /> },
      { path: 'newform', element: <NewFormPage /> },
      { path: 'list/:eventId', element: <EditFormPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: 'update-password', element: <UpdateProfilePage /> }
    ],
  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;