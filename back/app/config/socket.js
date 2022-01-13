const socketIo = require("socket.io");

module.exports = async (server) => {
  const io = socketIo(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("A client try to join a room");
    for (const client of io.sockets.sockets) {
      console.log(socket.id);
      console.log(client[0]);
      if (
        socket.id !== client[0] &&
        socket.handshake.address === client[1].handshake.address
      ) {
        socket.emit("socketAlreadyExists", {
          message: "user already connected",
        });
        return;
      }
    }
    console.log("ok");
    socket.emit("connectionEstablished", { message: "ok" });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
  return io;
};
