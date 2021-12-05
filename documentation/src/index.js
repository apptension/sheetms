import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import reportWebVitals from './reportWebVitals';
import DEFAULT_LANGUAGE from './translations/default/en.json';

const importTranslationFile = async () => {
    try {
        const data = await import(`./translations/${navigator.language}.json`);
        renderApp(data);
    }catch (e) {
        console.log(e);
        renderApp(DEFAULT_LANGUAGE);
    }
}

const renderApp = (messages) => {
    return ReactDOM.render(
        <React.StrictMode>
            <IntlProvider locale={navigator.language} messages={messages}>
                <App />
            </IntlProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

importTranslationFile();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
