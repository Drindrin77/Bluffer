import { combineReducers } from "redux";
import userReducer from "./users";
import roomReducer from "./rooms";
import { SagaType } from "../../types/SagaType";
const appReducer = combineReducers({
  currentUser: userReducer,
  room: roomReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === SagaType.KICK_USER_REQUEST) {
    state = undefined;
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
