import { all, call, put, takeLatest } from "redux-saga/effects";
import { RoomAPI } from "../../api/RoomAPI";
import { SagaType } from "../../types/SagaType";
import { createRoomResponse, getRoomResponse, updateRoomParamResponse } from "../actions/RoomsActions";

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

function* updateRoomParamSaga(action) {
  try {
    const { idRoom, param } = action.payload;
    console.log(action);

    const response = yield call(RoomAPI.updateRoomParam, idRoom, param);

    yield put(
      updateRoomParamResponse({
        room: response.data,
      })
    );
  } catch (e) {
    yield put(
      updateRoomParamResponse({
        error: e.message,
      })
    );
  }
}

function* getRoomSaga(action) {
  try {
    const { idRoom } = action.payload;
    const response = yield call(RoomAPI.getRoom, idRoom);

    yield put(
      getRoomResponse({
        room: response.data,
      })
    );
  } catch (e) {
    yield put(
      getRoomResponse({
        error: e.message,
      })
    );
  }
}

function* roomsSaga() {
  yield all([
    takeLatest(SagaType.CREATE_ROOM_REQUEST, createRoomSaga),
    takeLatest(SagaType.UPDATE_ROOM_PARAM_REQUEST, updateRoomParamSaga),
    takeLatest(SagaType.GET_ROOM_REQUEST, getRoomSaga),
  ]);
}

export default roomsSaga;
