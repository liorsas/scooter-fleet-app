const mongoose = require("mongoose");

let usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  passward: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", usersSchema);
