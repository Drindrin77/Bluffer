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
    try {
      const room = await Room.findOne({
        where: {
          id: req.params.id,
          idAdmin: req.currentUser.id,
        },
      });
      if (!room) {
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

  teamIsFull: async (req, res, next) => {
    try {
      const room = await Room.findOne({
        where: { idRoomSocket: req.body.idRoomSocket },
      });
      const { count } = await UserRoom.findAndCountAll({
        where: { roomId: room.id },
      });
      if (count >= room.nbPlayerMax) {
        throw new Error("Team is full|403");
      }
      return next();
    } catch (e) {
      throw new Error("Team is full|403");
    }
  },
};
