const {
  Sequelize,
  sequelize: {
    models: { Rooms },
  },
} = require("../models");

const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  return {
    insert: async (req, res, next) => {
      try {
        const { id: idAdmin, socketId } = req.currentUser;
        const idRoomSocket = uuidv4();

        const room = await Rooms.create({
          idAdmin,
          idRoomSocket,
        });

        const socketHandler = app.get("socketHandler");
        const socket = socketHandler.sockets.sockets.get(socketId);

        socket.join(idRoomSocket);
        res.status(201).send({ room });
      } catch (e) {
        return next(e);
      }
    },
    update: async (req, res, next) => {},
    findOne: () => {},
  };
};
