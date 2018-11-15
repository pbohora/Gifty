const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb://pradip:pradip123@ds013545.mlab.com:13545/gifty-database",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema, //schema:schema
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening on port 4000");
});
