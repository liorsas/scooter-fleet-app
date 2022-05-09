const mongoose = require("mongoose");

let parkingSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  address: {
    type: String,
  },
  capacity: {
    type: Number,
  },
  currLocation: {
    lat: { type: Number },
    lon: { type: Number },
  },
});

module.exports = mongoose.model("parking", parkingSchema);
