const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftSchema = new Schema({
  name: String,
  category: String,
  occasionId: String,
  targetId: String
});

module.exports = mongoose.model("Gift", giftSchema);
