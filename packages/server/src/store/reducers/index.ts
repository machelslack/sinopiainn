import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import rooms from "./rooms";


const reducers = Object.freeze({
  rooms:rooms
});
const rootReducer = combineReducers(reducers);

export default rootReducer;
