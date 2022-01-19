const {
  Sequelize,
  sequelize: {
    models: { Room, UserRoom },
  },
} = require("../models");

module.exports = (app) => {
  return {
    join: async (req, res, next) => {
      try {
        const room = await Room.findOne({
          idRoomSocket: req.body.idRoomSocket,
        });

        if (!room) {
          throw new Error(
            `Room with idRoomSocket ${req.body.idRoomSocket} does not exist|404`
          );
        }

        const userRoom = await UserRoom.create({
          userId: req.currentUser.id,
          roomId: room.id,
        });

        const socketHandler = app.get("socketHandler");
        await socketHandler.userJoinRoom(req.currentUser, room.idRoomSocket);

        res.status(201).send(userRoom);
      } catch (e) {
        return next(e);
      }
    },
  };
};
