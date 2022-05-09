const { Promise } = require("mongoose");
const scooterModel = require("./scooterModel");

function getScootersDB() {
  return new Promise((resolve, reject) => {
    scooterModel.find(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function addScooters(obj) {
  return new Promise((resolve, reject) => {
    let scooters = new scooterModel(obj);
    scooters.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(scooters);
      }
    });
  });
}

function getActiveScooters() {
  return new Promise((resolve, reject) => {
    scooterModel.find({ status: "active" }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function getScooterParkByLocation(lat, lon) {
  return new Promise((resolve, reject) => {
    scooterModel.find(
      { status: "charged", currLocation: { lat: lat, lon: lon } },
      function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
}

module.exports = {
  getScootersDB,
  addScooters,
  getActiveScooters,
  getScooterParkByLocation,
};
