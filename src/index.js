import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';

import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
//  basename="/goit-react-hw-05-movies/"
