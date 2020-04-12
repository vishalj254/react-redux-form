import React from 'react';
import HomePage from './components/HomePage/HomePage';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './components/reducer/rootReducer'


function App() {
  const store=createStore(rootReducer)
  return (
    <Provider store={store}>
  <HomePage />
  </Provider>
  );
}

export default App;
