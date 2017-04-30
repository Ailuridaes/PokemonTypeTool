import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { getPokemon } from './actions/apiActions';
import typeToolApp from './reducers';
import App from './components/App';

let store = createStore(
  typeToolApp,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(getPokemon()).then(() =>
  console.log(store.getState())
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
