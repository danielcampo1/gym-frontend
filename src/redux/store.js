import { createStore, compose, applyMiddleware } from "redux" 
import gymReducer from "./reducers/gymReducer";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    gymReducer,
    composeEnhancers(applyMiddleware(thunk))
    );


    export default store; 