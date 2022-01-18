export type User = {
  id: number;
  username: string;
  socketId: string;
};

// REDUCERS

export interface UserState {
  pending: boolean;
  user: User;
  error: any;
}

export const initialUserState: UserState = {
  pending: false,
  user: undefined,
  error: null,
};
