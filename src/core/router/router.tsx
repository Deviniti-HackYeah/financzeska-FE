import { createBrowserRouter } from 'react-router-dom';
import { Homepage } from '@/pages/homepage/homepage';
import { Routes } from '@/shared/enums';

export const router = createBrowserRouter([
  {
    children: [
      {
        path: Routes.HOME,
        element: <Homepage />,
      },
    ],
  },
]);
