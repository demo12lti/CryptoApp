import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // Correct import

import priceReducer from './reducers';

const rootReducer = combineReducers({
  prices: priceReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Use default export for thunk
);

export default store;
