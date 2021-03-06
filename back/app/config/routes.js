const express = require("express");
const routing = express.Router();
const {
  checkToken,
  isRoomsADM,
  canJoinTeam,
  teamIsFull,
} = require("../config/middlewares/middleware");

module.exports = async function (app) {
  const controlleurs = require("../controllers")(app);

  routing
    .route("/rooms/:id/kick")
    .post([checkToken, isRoomsADM], controlleurs.Rooms.kickUser);

  routing.route("/rooms").post([checkToken], controlleurs.Rooms.insert);

  routing
    .route("/rooms/:id")
    .get([checkToken], controlleurs.Rooms.findOne)
    .put([checkToken, isRoomsADM], controlleurs.Rooms.update);

  routing.route("/auth/guest").post(controlleurs.Users.authGuest);

  routing.route("/users").get(controlleurs.Users.find);

  routing
    .route("/userRooms")
    .post([checkToken, teamIsFull, canJoinTeam], controlleurs.UserRooms.join);

  app.use("/api/v1", routing);
};
