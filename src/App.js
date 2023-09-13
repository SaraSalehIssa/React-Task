import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import { Container } from 'react-bootstrap';

import RootLayout from './pages/Root';
import ListPage from './pages/List';
import NewFormPage from './pages/NewForm';
import EditFormPage from './pages/EditForm';
import ErrorPage from './pages/Error';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import ForgotPasswordPage from './pages/ForgotPassword';
import UpdateProfilePage from './pages/UpdateProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <AuthProvider>
          <Container
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '80vh' }}>
            <div
              className='w-100'
              style={{ maxWidth: '400px' }}
            >
              <SignUpPage />
            </div>
          </Container>
        </AuthProvider>
      },
      { path: 'list', element: <ListPage /> },
      { path: 'newform', element: <NewFormPage /> },
      { path: 'list/:eventId', element: <EditFormPage /> },
      {
        path: 'login', element: <AuthProvider>
          <Container
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '80vh' }}>
            <div
              className='w-100'
              style={{ maxWidth: '400px' }}
            >
              <LoginPage />
            </div>
          </Container>
        </AuthProvider>
      },
      {
        path: 'forgot-password', element: <AuthProvider>
          <Container
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '80vh' }}>
            <div
              className='w-100'
              style={{ maxWidth: '400px' }}
            >
              <ForgotPasswordPage />
            </div>
          </Container>
        </AuthProvider>
      },
      {
        path: 'update-password', element: <AuthProvider>
          <Container
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '80vh' }}>
            <div
              className='w-100'
              style={{ maxWidth: '400px' }}
            >
              <UpdateProfilePage />
            </div>
          </Container>
        </AuthProvider>
      }
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;