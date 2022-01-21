const jwt = require("jsonwebtoken");
const {
  sequelize: {
    models: { User, Room, UserRoom },
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
  isRoomsADM: async (req, res, next) => {
    console.log("isrooms");
    console.log(req.params);
    console.log(req.currentUser);
    try {
      const room = await Room.findOne({
        where: {
          id: req.params.id,
          idAdmin: req.currentUser.id,
        },
      });
      if (!room) {
        console.log("la");
        throw new Error("Unauthorized|401");
      }
      return next();
    } catch (e) {
      return next(e);
    }
  },
  canJoinTeam: async (req, res, next) => {
    try {
      const isAlreadyInTheTeam = await User.findOne({
        where: {
          id: req.currentUser.id,
        },
        include: [
          {
            model: Room,
            where: {
              idRoomSocket: req.body.idRoomSocket,
            },
          },
        ],
      });

      if (isAlreadyInTheTeam) {
        throw new Error("Unauthorized|401");
      }
      return next();
    } catch (e) {
      return next(e);
    }
  },
};
