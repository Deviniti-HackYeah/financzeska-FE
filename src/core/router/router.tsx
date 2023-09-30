import { createBrowserRouter } from 'react-router-dom';
import { Homepage } from '@/pages/homepage/homepage';
import { Routes } from '@/shared/enums';
import { GovLogin } from "@/pages/gov/gov-login";

export const router = createBrowserRouter([
  {
    children: [
      {
        path: Routes.HOME,
        element: <Homepage />,
      },
      {
        path: Routes.GOV_LOGIN,
        element: <GovLogin />,
      },
    ],
  },
]);
