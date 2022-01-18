import * as React from "react";
import { io } from "socket.io-client";
import { ENDPOINT } from "../config";

export const socket = io(ENDPOINT);
export const SocketContext = React.createContext(socket);
