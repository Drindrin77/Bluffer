import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import { saga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(saga);

export default store;
