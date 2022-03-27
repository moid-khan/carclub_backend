const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  full_name: {
    type: String, 
    required: true,
  },
  contact: String,
  address: String,
  email: String, 
  password: String 
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;