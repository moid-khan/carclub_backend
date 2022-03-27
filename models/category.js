const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  cat_name: {
    type: String,
    required: true,
  },
  cat_description: String,
  cat_img: String
});

const categoryModel = mongoose.model("categories", categorySchema);

module.exports = categoryModel;