const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Gifts = mongoose.model("Gift", giftSchema);
module.exports = Gifts;
