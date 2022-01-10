const path = require("path");
const lodash = require("lodash");
const name = path.basename(__filename, ".js");
const displayName = name.charAt(0).toLocaleLowerCase() + name.slice(1);
module.exports = async function (sequelize, DataTypes) {
  const Room = sequelize.define(
    name,
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nbPlayerMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idRoomSocket: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idAdmin: {
        type: DataTypes.INTEGER,
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
