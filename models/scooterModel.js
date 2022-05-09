const mongoose = require("mongoose");

let scootersSchema = new mongoose.Schema({
  currLocation: {
    lat: { type: Number },
    lon: { type: Number },
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("scooters", scootersSchema);
