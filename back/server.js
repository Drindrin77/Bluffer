const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const port = process.env.PORT || 5001;
const app = express();
const bodyParser = require("body-parser");

app.use(
  cors({
    exposedHeaders: ["Authorization"],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./app/config/routes")(app);

app.use((req, res, next) => {
  res.status(404).json({ message: `Route ${req.url} not found` });
});

app.use((err, req, res, next) => {
  const [message, status] = err.message.split("|");
  res.status(status || 500).json({ error: message || "Internal server error" });
});

db.sequelize.sync({ alter: true }).then(async () => {
  const server = require("http").Server(app);
  const socketHandler = await require("./app/config/socket")(server);
  app.set("socketHandler", socketHandler);
  server.listen(port, () => console.log(`Listening on port ${port}`));
});
