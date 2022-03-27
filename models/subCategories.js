const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  sub_name: {
    type: String, 
    required: true,
  },
  sub_description: String,
  c_id: String,
  sub_img: String 
});

const subCategoryModel = mongoose.model("subCategories", subCategorySchema);

module.exports = subCategoryModel;