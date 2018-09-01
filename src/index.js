import React from 'react';
import ReactDOM from 'react-dom';
import { provider , connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import { SearchRobots } from './reducers';
import 'tachyons';
// import  './Containers/App.css'

const store = createStore(SearchRobots);

ReactDOM.render(
    <provider store = {store}>
        <App />
    </provider>,
     document.getElementById('root'));
registerServiceWorker();
