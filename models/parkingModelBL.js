const parkingModel = require("./parkingModel");

function getParksDB() {
  return new Promise((resolve, reject) => {
    parkingModel.find(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function addParking(obj) {
  return new Promise((resolve, reject) => {
    let scooters = new parkingModel(obj);
    scooters.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(scooters);
      }
    });
  });
}

module.exports = { getParksDB, addParking };
