const {
  Sequelize,
  sequelize: {
    models: { User },
  },
} = require("../models");
const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  return {
    insert: async (req, res, next) => {
      try {
        const user = await User.create(req.body);
        const socketHandler = app.get("socketHandler");
        const idRoomSocket = uuidv4();

        res.status(201).send(user);
      } catch (e) {
        return next(e);
      }
    },
    delete: () => {},
    findOne: () => {},
    find: (req, res, next) => {
      try {
        res.json({ test: "ok" }).status(200);
      } catch (e) {
        next(e);
      }
    },
  };
};
