export type User = {
  idUser: number;
  userName: string;
};

// REDUCERS

interface UserState {
  pending: boolean;
  user: User;
  error: any;
}

export const initialUserState: UserState = {
  pending: false,
  user: null,
  error: null,
};
