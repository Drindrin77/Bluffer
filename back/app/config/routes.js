const express = require("express");
const routing = express.Router();

module.exports = async function (app) {
  const controlleurs = require("../controllers")(app);

  routing.post("/rooms", controlleurs.Rooms.insert);
  routing
    .route("/users")
    .get(controlleurs.Users.find)
    .post(controlleurs.Users.insert);

  app.use("/api/v1", routing);
};
