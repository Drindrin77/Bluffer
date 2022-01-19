import { initialRoomState, RoomState, SagaType } from "../../types/SagaType";
import { RoomsActions } from "../actions/RoomsActions";

export default (state = initialRoomState, action: RoomsActions): RoomState => {
  switch (action.type) {
    case SagaType.CREATE_ROOM_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SagaType.CREATE_ROOM_RESPONSE:
      return {
        pending: false,
        room: action.payload.room,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
