const { Sequelize } = require("sequelize");

module.exports = new Sequelize("bluffer_local", "root", null, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});
