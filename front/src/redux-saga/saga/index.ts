import { all, fork } from "redux-saga/effects";
import usersSaga from "./users";
import roomsSaga from "./rooms";

export function* saga() {
  yield all([fork(usersSaga), fork(roomsSaga)]);
}
