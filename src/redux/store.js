import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/root-saga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(() => {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;