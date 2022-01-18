import { all, call, put, takeEvery } from "redux-saga/effects";
import { UserAPI } from "../../../api/UserAPI";
import { setAxiosToken } from "../../../config";
import { SagaType } from "../../../types/SagaType";
import { createUserResponse } from "../../actions/UsersActions";

/*
    const user = await UserAPI.createUser(userName, socketId);
    const token = user.headers.authorization;
    localStorage.setItem("token", token);
    setAxiosToken(token);
    const roomResult = await RoomAPI.createRoom();
    return roomResult.data.room.idRoomSocket;
    */
function* createUserSaga(action) {
  try {
    console.log(action);

    const response = yield UserAPI.createUser(action.payload.userName, action.payload.socketId);
    const token = response.headers.authorization;
    localStorage.setItem("token", token);
    setAxiosToken(token);
    yield put(
      createUserResponse({
        user: response.user,
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
  yield all([takeEvery(SagaType.CREATE_USER_REQUEST, createUserSaga)]);
}

export default usersSaga;
