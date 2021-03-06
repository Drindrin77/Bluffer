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
        io.to(idRoomSocket).emit("userJoinedRoom", {
          user,
        });
      } catch (e) {
        console.log(e);
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
    removeUserFromRoom: (userId, userSocketId, roomSocketId) => {
      try {
        const socket = io.sockets.sockets.get(userSocketId);
        socket.leave(roomSocketId);
        io.to(roomSocketId).emit("userLeftRoom", { userId });
        socket.emit("getKicked", "You have been kicked");
      } catch (e) {
        console.log(e);
        throw new Error("Error with socket services removeUserFromRoom|500");
      }
    },
  };
  return io;
};
