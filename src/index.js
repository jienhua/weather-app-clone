import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers';

import logger from 'redux-logger';

import thunkMiddleware from 'redux-thunk';

let store = createStore(
	mainReducer,
	applyMiddleware(
		// logger,
		thunkMiddleware
	)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
