const socketIo = require("socket.io");

module.exports = async (server) => {
  const io = socketIo(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("A client try to join a room");
    const clients = io.sockets.client();
    if (clients) {
      for (const clientId of clients) {
        const clientSocket = io.sockets.sockets.get(clientId);
        if (socket.handshake.address === clientSocket.handshake.address) {
          socket.emit("socketAlreadyExists", {
            message: "user already connected",
          });
          return;
        }
      }
    }
    socket.emit("connectionEstablished", { message: "ok" });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
  return io;
};
