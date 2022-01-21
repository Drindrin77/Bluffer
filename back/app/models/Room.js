const path = require("path");
const lodash = require("lodash");
const name = path.basename(__filename, ".js");
const displayName = name.charAt(0).toLocaleLowerCase() + name.slice(1);
module.exports = async function (sequelize, DataTypes) {
  const Room = sequelize.define(
    name,
    {
      nbPlayerMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          min: 2,
          max: 10,
        },
      },
      maxScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 12,
        validate: {
          min: 12,
          max: 20,
        },
      },
      idRoomSocket: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idAdmin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
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
  return Room;
};
