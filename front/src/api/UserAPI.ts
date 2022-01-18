import { api } from "../config";
import { User } from "../types/UserType";

export namespace UserAPI {
  export async function createUser(username, socketId): Promise<User> {
    return api.post("/auth/guest", { username, socketId });
  }
}
