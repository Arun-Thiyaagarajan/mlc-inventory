import { createBrowserRouter } from 'react-router-dom';
import { ForgotPassword, Landing, Login, MainLayout, Register, ResetPassword, VerifyAccount } from '../pages/index.js';
// actions
import { action as loginAction } from '../pages/auth/Login.jsx';
import { action as registerAction } from '../pages/auth/Register.jsx';
// errors
import NotFoundPage from '../errors/NotFound.jsx';
import { store } from '../store/store.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      }
    ],
  },
  {
    path: '/auth',
    errorElement: '',
    children: [
      {
        path: 'login',
        element: <Login />,
        action: loginAction(store),
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction(),
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'verify-account',
        element: <VerifyAccount />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;