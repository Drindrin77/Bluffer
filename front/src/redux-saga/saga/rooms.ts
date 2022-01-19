import { all, call, put, takeLatest } from "redux-saga/effects";
import { RoomAPI } from "../../api/RoomAPI";
import { SagaType } from "../../types/SagaType";
import { createRoomResponse } from "../actions/RoomsActions";

function* createRoomSaga(action) {
  try {
    const response = yield call(RoomAPI.createRoom);

    yield put(
      createRoomResponse({
        room: response.data,
      })
    );
  } catch (e) {
    yield put(
      createRoomResponse({
        error: e.message,
      })
    );
  }
}

function* usersSaga() {
  yield all([takeLatest(SagaType.CREATE_ROOM_REQUEST, createRoomSaga)]);
}

export default usersSaga;
