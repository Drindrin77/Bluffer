const {
  Sequelize,
  sequelize: {
    models: { Room },
  },
} = require("../models");

const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  return {
    insert: async (req, res, next) => {
      try {
        const { id: idAdmin, socketId } = req.currentUser;
        const idRoomSocket = uuidv4();

        const room = await Room.create({
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
    update: async (req, res, next) => {
      try {
        const room = await Room.findOne({ where: { id: req.params.id } });
        await room.update({
          ...req.body,
        });
        await room.save({ fields: ["nbPlayerMax", "maxScore"] });
        res.status(200).send(room);
      } catch (e) {
        return next(e);
      }
    },
    findOne: () => {},
  };
};
