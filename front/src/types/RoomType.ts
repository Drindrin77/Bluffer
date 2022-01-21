import { ENDPOINTFRONT } from "../config";
import { User } from "./UserType";

export type Room = {
  id: string;
  idAdmin: number;
  idRoomSocket: string;
  maxScore: number;
  nbPlayerMax: number;
  users: User[];
};

export const invitLink = (idRoomSocket: string) => ENDPOINTFRONT + "/join/" + idRoomSocket;
