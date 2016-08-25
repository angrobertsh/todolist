import React from 'react';
import { Provider } from 'react-redux';
import Store from '../store/store';
import App from './app';

const ourStore = Store;

const Root = ({}) => (
  <Provider store={ourStore}>
    <App />
  </Provider>
);

export default Root;
