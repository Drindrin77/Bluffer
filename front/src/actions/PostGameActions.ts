import { RoomAPI } from "../api/RoomAPI";
import { UserAPI } from "../api/UserAPI";
import { setAxiosToken } from "../config";
import { User } from "../types/UserType";
import { useHistory } from "react-router-dom";

export namespace PostGameActions {
  export async function createGame(userName, socketId): Promise<boolean> {
    try {
      const user = await UserAPI.createUser(userName, socketId);
      const token = user.headers.authorization;
      localStorage.setItem("token", token);
      setAxiosToken(token);
      const room = await RoomAPI.createRoom();
      console.log(room);
      return true;
    } catch {
      return false;
    }
  }
}
