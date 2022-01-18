import { all, fork } from "redux-saga/effects";
import usersSaga from "./users";

export function* saga() {
  yield all([fork(usersSaga)]);
}
