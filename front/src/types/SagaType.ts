import { Room } from "./RoomType";
import { User } from "./UserType";

export const SagaType = {
  CREATE_USER_REQUEST: "CREATE_USER_REQUEST",
  CREATE_USER_RESPONSE: "CREATE_USER_RESPONSE",
  CREATE_ROOM_REQUEST: "CREATE_ROOM_REQUEST",
  CREATE_ROOM_RESPONSE: "CREATE_ROOM_RESPONSE",
  UPDATE_ROOM_PARAM_REQUEST: "UPDATE_ROOM_PARAM_REQUEST",
  UPDATE_ROOM: "UPDATE_ROOM",
  GET_ROOM_REQUEST: "GET_ROOM_REQUEST",
  GET_ROOM_RESPONSE: "GET_ROOM_RESPONSE",
  JOIN_ROOM_REQUEST: "JOIN_ROOM_REQUEST",
  KICK_USER_REQUEST: "KICK_USER_REQUEST",
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

export interface UsersState {
  pending: boolean;
  users: User[];
  error: any;
}

export const initialUsersState: UsersState = {
  pending: false,
  users: [],
  error: null,
};
