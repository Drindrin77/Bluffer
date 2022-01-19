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
