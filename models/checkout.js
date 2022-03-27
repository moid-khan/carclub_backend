const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  full_name: {
    type: String, 
    required: true,
  },
  card_no: String,
  exp_date: String,
  cvv: String 
});

const checkoutModel = mongoose.model("checkout", checkoutSchema);

module.exports = checkoutModel;