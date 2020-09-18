import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '@/data/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
  );

  return store;
}