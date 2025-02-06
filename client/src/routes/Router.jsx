import { createBrowserRouter } from 'react-router-dom';
import { ForgotPassword, Inventory, Landing, Login, MainLayout, Register, ResetPassword, VerifyAccount } from '../pages';
// loaders
// import { loader as LandingLoader } from '../pages/home/Landing.jsx';
// import { loader as MainLayoutLoader } from '../pages/MainLayout.jsx';
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
    // loader: MainLayoutLoader,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'inventory',
        element: <Inventory />,
      },
      {
        path: 'user',
        children: [
          {
            path: 'my-profile',
            element: <div>Profile Page</div>,
          },
          {
            path: 'my-favourites',
            element: <div>My Favourites</div>,
          },
          {
            path: 'settings',
            element: <div>Settings</div>,
          },
        ],
      },
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
        action: registerAction,
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