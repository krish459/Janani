import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import {reducer} from './reducers/reducer';
import {getAllJobsReducer} from './reducers/reducer'

const rootReducer = combineReducers({
  filter: reducer,
  fliter: getAllJobsReducer
  // reducer:reducer,
  // getAllJobsReducer:getAllJobsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(Reducer,composeEnhancers());

export default store;