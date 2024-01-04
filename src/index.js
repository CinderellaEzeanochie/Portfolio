import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppServer from './AppServer';
import reportWebVitals from './reportWebVitals';

ReactDOM.hydrate(<AppServer />, document.getElementById('root'));
