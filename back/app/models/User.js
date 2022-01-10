const path = require("path");
const lodash = require("lodash");
const name = path.basename(__filename, ".js");
const displayName = name.charAt(0).toLocaleLowerCase() + name.slice(1);
module.exports = async function (sequelize, DataTypes) {
  const User = sequelize.define(
    name,
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      socketId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        default: 0,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      name: {
        singular: displayName,
        plural: displayName + "s",
      },
      tableName: lodash.snakeCase(name),
    }
  );

  User.hasOne(sequelize.models.Room);
  return User;
};
