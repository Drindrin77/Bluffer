const socketIo = require("socket.io");

module.exports = async (server) => {
  const io = socketIo(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("A client try to join a room");
    const clients = io.sockets.adapter.rooms.get("test");
    if (clients) {
      for (const clientId of clients) {
        const clientSocket = io.sockets.sockets.get(clientId);
        if (socket.handshake.address === clientSocket.handshake.address) {
          socket.emit("FromAPI", "Utilisateur déjà connecté");
          return;
        }
      }
    }
    console.log("client joined room");
    socket.join("test");
    socket.emit("FromAPI", "connecté");

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
  return io;
};
