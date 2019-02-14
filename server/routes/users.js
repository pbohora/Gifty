const express = require("express");
const bodyParser = require("body-parser");
const userRouter = express.Router();

userRouter.use(bodyParser.json());
/* GET users listing. */
userRouter.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = userRouter;
