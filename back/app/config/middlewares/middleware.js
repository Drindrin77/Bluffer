const jwt = require("jsonwebtoken");
const {
  sequelize: {
    models: { User },
  },
} = require("../../models");
module.exports = {
  checkToken: async (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (token) {
        token = token.slice(7);
        const decoded = jwt.decode(token, "bluffer2022leanna@");
        if (decoded) {
          const { id } = decoded;
          const currentUser = await User.findOne({ where: { id } });
          if (currentUser) {
            req.currentUser = currentUser;
            return next();
          }
        }
      }
      throw new Error("Unauthorized|401");
    } catch (e) {
      return next(e);
    }
  },
};
