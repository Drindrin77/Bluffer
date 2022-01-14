const express = require("express");
const routing = express.Router();
const {
  checkToken,
  isRoomsADM,
  canJoinTeam,
} = require("../config/middlewares/middleware");

module.exports = async function (app) {
  const controlleurs = require("../controllers")(app);

  routing
    .route("/rooms")
    .post([checkToken], controlleurs.Rooms.insert)
    .put([checkToken, isRoomsADM], controlleurs.Rooms.update);

  routing.route("/auth/guest").post(controlleurs.Users.authGuest);

  routing.route("/users").get(controlleurs.Users.find);

  routing
    .route("/userRooms")
    .post([checkToken, canJoinTeam], controlleurs.UserRooms.join);

  app.use("/api/v1", routing);
};
