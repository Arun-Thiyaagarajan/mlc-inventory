import { createBrowserRouter } from 'react-router-dom';
import { ForgotPassword, Login, MainLayout, Register, VerifiedAccount } from '../pages/index.js';
//actions
import { action as loginAction } from '../pages/auth/Login.jsx';
import { action as registerAction } from '../pages/auth/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: '',
    children: [
      // Your routes here
    ],
  },
  {
    path: '/auth',
    errorElement: '',
    children: [
      {
        path: 'login',
        element: <Login />,
        action: loginAction(),
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
        element: <VerifiedAccount />,
      },
    ],
  },
]);

export default router;