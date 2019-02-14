const express = require("express");
const bodyParser = require("body-parser");

const giftRouter = express.Router();

giftRouter.use(bodyParser.json());

giftRouter
  .route("/")
  .get((req, res, next) => {
    res.end("Will send all the gifts to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the gift: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /gift");
  })
  .delete((req, res, next) => {
    res.end("Deleting all gift");
  });

giftRouter
  .route("/:giftId")
  .get((req, res, next) => {
    res.end("Will send all the gift to you!: " + req.params.giftId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("not supported");
  })
  .put((req, res, next) => {
    res.write("Updating the dish: " + req.params.dishId + "\n");
    res.end(
      "Will update the dish: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting all gift");
  });

module.exports = giftRouter;
