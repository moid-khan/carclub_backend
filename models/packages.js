const mongoose = require("mongoose");

const packagesSchema = new mongoose.Schema({
  p_days: Number,
  p_price: Number,
  sub_id: String,
});

const packagesModel = mongoose.model("packages", packagesSchema);

module.exports = packagesModel;