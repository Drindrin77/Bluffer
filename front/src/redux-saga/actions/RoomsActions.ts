import { SagaType } from "../../types/SagaType";

export type RoomsActions = {
  type: string;
  error: string;
  payload: any;
};

export const createRoomRequest = () => ({
  type: SagaType.CREATE_ROOM_REQUEST,
});

export const updateRoomParamRequest = (payload) => ({
  type: SagaType.UPDATE_ROOM_PARAM_REQUEST,
  payload,
});

export const updateRoom = (payload) => ({
  type: SagaType.UPDATE_ROOM,
  payload,
});

export const getRoomRequest = (payload) => ({
  type: SagaType.GET_ROOM_REQUEST,
  payload,
});

export const joinRoomRequest = (payload) => ({
  type: SagaType.JOIN_ROOM_REQUEST,
  payload,
});
