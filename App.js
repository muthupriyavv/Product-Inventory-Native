import React from 'react';
import { createStore } from 'redux';
import reducers from './src/reducers/allreducers';
import { Provider } from 'react-redux';
import Routing from './src/routing/routing';

const store = createStore(reducers)
export default function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}


