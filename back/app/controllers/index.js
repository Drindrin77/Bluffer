const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

module.exports = (app) => {
  let controllers = {};

  fs.readdirSync(__dirname)
    .filter(
      (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach(
      (file) =>
        (controllers[file.split(".")[0]] = require(path.join(__dirname, file))(
          app
        ))
    );

  return controllers;
};
