import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={configureStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, document.getElementById('root')
);
