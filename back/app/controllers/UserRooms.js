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
        const userRoom = await UserRoom.create({
          userId: req.currentUser.id,
          RoomId: req.body.roomId,
        });
        res.status(201).send(userRoom);
      } catch (e) {
        return next(e);
      }
    },
  };
};
