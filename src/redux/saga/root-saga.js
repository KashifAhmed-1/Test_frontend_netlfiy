import { all } from "redux-saga/effects";
import kashifRootSaga from "./kashifRoot-saga";

export default function* rootSaga() {
  yield all([kashifRootSaga()]);
}
