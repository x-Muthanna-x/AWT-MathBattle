import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginPage } from './Login/LoginPage.tsx'
import { ThemeProvider } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { theme } from './main-theme.ts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
