import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/system'

const root = ReactDOM.createRoot(document.getElementById('root'));
// const theme = createTheme({
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#90caf9',
//     },
//     secondary: {
//       main: '#f48fb1',
//     },
//   },
// });
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

reportWebVitals();