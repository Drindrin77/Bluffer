const {
  Sequelize,
  sequelize: {
    models: { Room },
  },
} = require("../models");
module.exports = (app) => {
  return {
    insert: async (req, res, next) => {
      try {
      } catch (e) {
        return next(e);
      }
    },
    delete: () => {},
    findOne: () => {},
  };
};
