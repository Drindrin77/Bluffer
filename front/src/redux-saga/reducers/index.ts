import { combineReducers } from "redux";
import userReducer from "./users";
import roomReducer from "./rooms";
const rootReducer = combineReducers({
  currentUser: userReducer,
  room: roomReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
