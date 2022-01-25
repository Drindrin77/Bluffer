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
        const room = await Room.findOne({
          where: { id: req.params.id },
          include: [{ model: User }],
        });
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
    kickUser: async (req, res, next) => {
      try {
        const user = await User.findOne({ id: req.body.userId });
        if (!user) {
          throw Error(`User with id ${user.id} does not exist|404`);
        }

        const room = await Room.findOne({ id: req.params.id });
        if (room) {
          throw Error(`Room with id ${room.id} does not exist|404`);
        }

        const userToKick = await UserRoom({
          userId: user.id,
          roomId: room.id,
        });
        if (!userToKick) {
          throw Error(
            `User with id ${user.id} is not in the Room with id ${room.id}|404`
          );
        }

        await userToKick.destroy();

        const socketHandler = app.get("socketHandler");
        socketHandler.services.removeUserFromRoom(
          user.id,
          user.socketId,
          room.idRoomSocket
        );

        res.status(200).send(userToKick);
      } catch (e) {
        return next(e);
      }
    },
  };
};
