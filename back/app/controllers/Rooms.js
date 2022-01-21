const {
  Sequelize,
  sequelize: {
    models: { Room, UserRoom, User },
  },
} = require("../models");

const { v4: uuidv4 } = require("uuid");
const UserRooms = require("./UserRooms");

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

        await UserRoom.create({
          roomId: room.id,
          userId: idAdmin,
        });

        const result = await Room.findOne({
          where: {
            id: room.id,
          },
          include: [{ model: User }],
        });

        const socketHandler = app.get("socketHandler");
        const socket = socketHandler.sockets.sockets.get(socketId);

        socket.join(idRoomSocket);

        res.status(201).send(result);
      } catch (e) {
        return next(e);
      }
    },
    update: async (req, res, next) => {
      try {
        const room = await Room.findOne({ where: { id: req.params.id }, include: [{ model: User }] });
        await room.update({
          ...req.body,
        });
        await room.save({ fields: ["nbPlayerMax", "maxScore"] });

        const socketHandler = app.get("socketHandler");
        socketHandler.services.updateConfigRoom(room);

        res.status(200).send(room);
      } catch (e) {
        return next(e);
      }
    },
    findOne: async (req, res, next) => {
      try {
        const room = await Room.findOne({
          where: {
            id: req.params.id,
          },
          include: User,
        });

        res.status(201).send(room);
      } catch (e) {
        return next(e);
      }
    },
  };
};
