const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const occasionSchema = new Schema({
  name: String
});

module.exports = mongoose.model("Occasion", occasionSchema);
