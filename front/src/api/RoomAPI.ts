import { securedApi } from "../config";
import { Room } from "../types/RoomType";

export namespace RoomAPI {
  export async function createRoom(): Promise<Room> {
    return securedApi.post("/rooms");
  }
}
