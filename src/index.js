import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/reducer.js'
import ErrorBoundry from './components/Error-boundry'
import { Provider } from 'react-redux';
import App from './components/App/';
import './index.css';

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

