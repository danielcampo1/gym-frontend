import { createStore, combineReducers, compose, applyMiddleware } from "redux" 
import gymReducer from "./reducers/gymReducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    gymWorkouts: gymReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );


    export default store; 