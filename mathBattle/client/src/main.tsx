import React from 'react'
import ReactDOM from 'react-dom/client'
import StartMenu from './StartMenu.tsx'
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4648ba',
    },
    secondary: {
      main: '#f3bc77',
    }
  },
  typography: {
    fontFamily: "Lora, sans-serif",
    fontSize:16
  }
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <StartMenu /></ThemeProvider>
  </React.StrictMode>,
)
