import { all, call, put, takeLatest } from "redux-saga/effects";
import { UserAPI } from "../../api/UserAPI";
import { setAxiosToken } from "../../config";
import { SagaType } from "../../types/SagaType";
import { createUserResponse } from "../actions/UsersActions";

function* createUserSaga(action) {
  try {
    const response = yield call(UserAPI.createUser, action.payload.userName, action.payload.socketId);
    const token = response.headers.authorization;
    localStorage.setItem("token", token);
    setAxiosToken(token);

    yield put(
      createUserResponse({
        user: response.data,
      })
    );
  } catch (e) {
    yield put(
      createUserResponse({
        error: e.message,
      })
    );
  }
}

function* usersSaga() {
  yield all([takeLatest(SagaType.CREATE_USER_REQUEST, createUserSaga)]);
}

export default usersSaga;
