const {
  Sequelize,
  sequelize: {
    models: { Room, UserRoom, User },
  },
} = require("../models");

module.exports = (app) => {
  return {
    join: async (req, res, next) => {
      try {
        const room = await Room.findOne({
          where: {
            idRoomSocket: req.body.idRoomSocket,
          },
        });

        if (!room) {
          throw new Error(`Room with idRoomSocket ${req.body.idRoomSocket} does not exist|404`);
        }

        await UserRoom.create({
          userId: req.currentUser.id,
          roomId: room.id,
        });

        const socketHandler = app.get("socketHandler");
        const socket = socketHandler.sockets.sockets.get(req.currentUser.socketId);
        socket.join(room.idRoomSocket);

        await socketHandler.services.userJoinRoom(req.currentUser, room.idRoomSocket);

        const result = await Room.findOne({
          where: {
            id: room.id,
          },
          include: [{ model: User }],
        });

        res.status(201).send(result);
      } catch (e) {
        return next(e);
      }
    },
    find: async (req, res, next) => {},
  };
};
