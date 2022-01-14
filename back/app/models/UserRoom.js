const path = require("path");
const lodash = require("lodash");
const name = path.basename(__filename, ".js");
const displayName = name.charAt(0).toLocaleLowerCase() + name.slice(1);
module.exports = async function (sequelize, DataTypes) {
  const { Room, User } = sequelize.models;
  const UserRoom = sequelize.define(
    name,
    {},
    {
      freezeTableName: true,
      underscored: true,
      timestamps: false,
      name: {
        singular: displayName,
        plural: displayName + "s",
      },
      tableName: lodash.snakeCase(name),
    }
  );

  User.belongsToMany(Room, { through: UserRoom });
  Room.belongsToMany(User, { through: UserRoom });

  return UserRoom;
};
