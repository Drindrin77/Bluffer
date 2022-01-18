import { SagaType } from "../../../types/SagaType";
import { initialUserState } from "../../../types/UserType";
import { UsersActions } from "../../actions/UsersActions";

export default (state = initialUserState, action: UsersActions) => {
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
  }
};
