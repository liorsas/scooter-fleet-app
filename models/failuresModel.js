const mongoose = require("mongoose");

let failuresSchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  openingTime: {
    type: Date,
    required: true,
  },
  closingTime: {
    type: Date,
    required: true,
  },
  scooterId: {
    type: mongoose.ObjectId,
  },
});

module.exports = mongoose.model("failures", failuresSchema);
