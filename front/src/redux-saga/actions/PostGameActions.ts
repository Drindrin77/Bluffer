import { RoomAPI } from "../../api/RoomAPI";
import { UserAPI } from "../../api/UserAPI";
import { setAxiosToken } from "../../config";
import { User } from "../../types/UserType";
import { useHistory } from "react-router-dom";

export namespace PostGameActions {
  export async function createGame(userName, socketId): Promise<boolean> {
    const user = await UserAPI.createUser(userName, socketId);
    const token = user.headers.authorization;
    localStorage.setItem("token", token);
    setAxiosToken(token);
    const roomResult = await RoomAPI.createRoom();
    return roomResult.data.room.idRoomSocket;
  }
}
