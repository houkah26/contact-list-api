const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

// Set up the express app
const app = express();

// Log requests to the console
app.use(logger("dev"));

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Require our routes into the application
require("./server/routes")(app);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome!"
  })
);

module.exports = app;
