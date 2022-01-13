const express = require("express");
const routing = express.Router();
const { checkToken } = require("../config/middlewares/middleware");

module.exports = async function (app) {
  const controlleurs = require("../controllers")(app);

  routing
    .route("/rooms")
    .post([checkToken], controlleurs.Rooms.insert)
    .put(controlleurs.Rooms.update);

  routing.route("/auth/guest").post(controlleurs.Users.authGuest);

  routing.route("/users").get(controlleurs.Users.find);

  app.use("/api/v1", routing);
};
