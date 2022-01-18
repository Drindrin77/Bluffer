import { SagaType } from "../../types/SagaType";

export type UsersActions = {
  type: string;
  error: string;
  payload: any;
};

export const createUserRequest = (userName: string, socketId: string) => ({
  type: SagaType.CREATE_USER_REQUEST,
  payload: { userName, socketId },
});

export const createUserResponse = (payload) => ({
  type: SagaType.CREATE_USER_RESPONSE,
  payload,
});
