const socketIo = require("socket.io");

module.exports = async (server) => {
  const io = socketIo(server, {
    cors: { origin: "*" },
  });

  io.on("connect", (socket) => {
    socket.emit("connectionEstablished", "ok");
  });

  io.services = {
    userJoinRoom: (user, idRoomSocket) => {
      try {
        const socket = socketHandler.sockets.sockets.get(user.socketId);
        socket.join(idRoomSocket);
        io.to(idRoomSocket).emit("userJoinedRoom", {
          user,
        });
      } catch (e) {
        throw new Error("Error with socket services userJoinRoom|500");
      }
    },
    updateConfigRoom: (room) => {
      try {
        io.to(room.idRoomSocket).emit("updateRoomConfig", {
          room,
        });
      } catch (e) {
        throw new Error("Error with socket services updateConfigRoom|500");
      }
    },
  };
  return io;
};
