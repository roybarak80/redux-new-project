import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import {BrowserRouter, Route} from 'react-router-dom';
//import promiseMiddleware from 'redux-promise';
import './app.css';

// COMPONENTS
import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  
    <Provider store={createStoreWithMiddleware(reducers)}>
   
        <div>
            <App/>
      
        </div>
    
</Provider>,
document.getElementById('root'));