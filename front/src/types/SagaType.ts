import { Room } from "./RoomType";
import { User } from "./UserType";

export const SagaType = {
  CREATE_USER_REQUEST: "CREATE_USER_REQUEST",
  CREATE_USER_RESPONSE: "CREATE_USER_RESPONSE",
  CREATE_ROOM_REQUEST: "CREATE_ROOM_REQUEST",
  CREATE_ROOM_RESPONSE: "CREATE_ROOM_RESPONSE",
};

// REDUCERS

export interface UserState {
  pending: boolean;
  user: User;
  error: any;
}

export const initialUserState: UserState = {
  pending: false,
  user: null,
  error: null,
};

export interface RoomState {
  pending: boolean;
  room: Room;
  error: any;
}

export const initialRoomState: RoomState = {
  pending: false,
  room: null,
  error: null,
};
