import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
)

console.log("Register servicw worker")
serviceWorkerRegistration.register();