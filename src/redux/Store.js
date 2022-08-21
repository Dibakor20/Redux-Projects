import { createStore,applyMiddleware } from "redux";
import { myLogger } from "./middleware/MyLogger";
import rootReducers from "./rootReducers";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(logger, myLogger))
)

export default store;