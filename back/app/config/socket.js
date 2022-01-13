const socketIo = require("socket.io");

module.exports = async (server) => {
  const io = socketIo(server, {
    cors: { origin: "*" },
  });

  io.services = {};

  return io;
};
