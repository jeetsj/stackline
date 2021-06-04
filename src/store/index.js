import rootReducer from './reducers';
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";


const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), reduxDevTools)
);


export default store;