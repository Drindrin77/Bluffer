import { api, securedApi } from "../config";
import { User } from "../types/UserType";

export namespace RoomAPI {
  export async function createRoom() {
    return securedApi.post("/rooms");
  }
}
