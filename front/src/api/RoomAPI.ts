import { securedApi } from "../config";
import { Room } from "../types/RoomType";
import { User } from "../types/UserType";

export namespace RoomAPI {
  export async function createRoom(): Promise<Room> {
    return securedApi.post("/rooms");
  }

  export async function updateRoomParam(idRoom, param): Promise<Room> {
    return securedApi.put(`/rooms/${idRoom}`, param);
  }

  export async function getRoom(idRoom): Promise<Room> {
    return securedApi.get(`/rooms/${idRoom}`);
  }

  export async function joinRoom(idRoomSocket): Promise<Room> {
    return securedApi.post("/userRooms", { idRoomSocket });
  }

  export async function kickPlayer(idRoom, idKickedPlayer): Promise<User> {
    return securedApi.post(`/rooms/${idRoom}/kick`, { userId: idKickedPlayer });
  }
}
