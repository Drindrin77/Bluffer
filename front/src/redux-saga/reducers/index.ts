import { combineReducers } from "redux";
import userReducer from "./users";
const rootReducer = combineReducers({
  currentUser: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
