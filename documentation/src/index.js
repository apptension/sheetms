import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import reportWebVitals from './reportWebVitals';
import messages from './translations.json';

ReactDOM.render(
  <React.StrictMode>
      <IntlProvider locale={navigator.language || 'en'} messages={messages[navigator.language]}>
          <App />
      </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
