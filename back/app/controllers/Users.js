const {
  Sequelize,
  sequelize: {
    models: { User },
  },
} = require("../models");
const jwt = require("jsonwebtoken");

module.exports = (app) => {
  return {
    authGuest: async (req, res, next) => {
      try {
        const user = await User.create(req.body);
        const token = jwt.sign({ id: user.id }, "bluffer2022leanna@");
        res.setHeader("Authorization", "Bearer " + token);
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
