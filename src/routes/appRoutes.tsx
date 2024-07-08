import { createHashRouter } from 'react-router-dom';
import React from 'react';
import ProtectedRoute from '../routers/Protected.route';
import PAGE_ROUTES from '../enum/page-routes';
import Login from '../pages/Login';
import DashBoard from '../pages/DashBoard';
import Recorder from '../pages/Recorder';

export const appRouters = createHashRouter([
  {
    path: '/admin',
    element: <ProtectedRoute />,
    children: [
      {
        path: PAGE_ROUTES.DASHBOARD,
        element: <DashBoard />
      }
    ]
  },
  {
    path: PAGE_ROUTES.LOGIN,
    element: <Login />
  }
]);
