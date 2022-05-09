const failuresModel = require("./failuresModel");
const mongoose = require("mongoose");

function getFailureDB() {
  return new Promise((resolve, reject) => {
    failuresModel.find(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function addFailure(obj) {
  return new Promise((resolve, reject) => {
    let failure = new failuresModel(obj);
    failure.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(failure);
      }
    });
  });
}

function getFailureByScooterId(scooterId) {
  return new Promise((resolve, reject) => {
    let scootId = mongoose.Types.ObjectId(scooterId);
    failuresModel.find({ scooterId: scootId }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = { getFailureDB, addFailure, getFailureByScooterId };
