import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import './Containers/App.css'
ReactDOM.render(
    <App/>, document.getElementById('root'));
registerServiceWorker();
