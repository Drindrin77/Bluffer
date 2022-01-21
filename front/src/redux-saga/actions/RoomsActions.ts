import { SagaType } from "../../types/SagaType";

export type RoomsActions = {
  type: string;
  error: string;
  payload: any;
};

export const createRoomRequest = () => ({
  type: SagaType.CREATE_ROOM_REQUEST,
});

export const createRoomResponse = (payload) => ({
  type: SagaType.CREATE_ROOM_RESPONSE,
  payload,
});

export const updateRoomParamRequest = (payload) => ({
  type: SagaType.UPDATE_ROOM_PARAM_REQUEST,
  payload,
});

export const updateRoomParamResponse = (payload) => ({
  type: SagaType.UPDATE_ROOM_PARAM_RESPONSE,
  payload,
});

export const getRoomRequest = (payload) => ({
  type: SagaType.GET_ROOM_REQUEST,
  payload,
});

export const getRoomResponse = (payload) => ({
  type: SagaType.GET_ROOM_RESPONSE,
  payload,
});
