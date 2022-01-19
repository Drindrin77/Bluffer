import { SagaType, UserState, initialUserState } from "../../types/SagaType";
import { UsersActions } from "../actions/UsersActions";

export default (state = initialUserState, action: UsersActions): UserState => {
  switch (action.type) {
    case SagaType.CREATE_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SagaType.CREATE_USER_RESPONSE:
      return {
        pending: false,
        user: action.payload.user,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
