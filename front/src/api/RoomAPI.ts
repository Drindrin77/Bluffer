import { securedApi } from "../config";
import { Room } from "../types/RoomType";

export namespace RoomAPI {
  export async function createRoom(): Promise<Room> {
    return securedApi.post("/rooms");
  }

  export async function updateRoomParam(idRoom, param): Promise<Room> {
    return securedApi.put(`/rooms/${idRoom}`, param);
  }

  export async function getRoom(idRoom): Promise<any> {
    return securedApi.get(`/rooms/${idRoom}`);
  }
}
