import { api } from "../config";
import { User } from "../types/UserType";

export namespace UserAPI {
  export async function createUser(username, socketId) {
    return api.post("/auth/guest", { username, socketId });
  }
}
