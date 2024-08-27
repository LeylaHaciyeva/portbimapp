import { createStore } from "redux";
import rootReducer  from "../reducers/rootReducer";
const store = createStore(rootReducer);
export default store;
// src/store.js
// import { createStore, combineReducers } from 'redux';
// import languageReducer from './reducers/languageReducer';

// const rootReducer = combineReducers({
//   language: languageReducer,
// });

// const store = createStore(rootReducer);

// export default store;
