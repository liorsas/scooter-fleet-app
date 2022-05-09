const userModel = require("./usersModel");

function getUsersDb() {
  return new Promise((resolve, reject) => {
    userModel.find(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function getUserDB(idVal) {
  return new Promise((resolve, reject) => {
    userModel.findById(idVal, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function addUser(obj) {
  return new Promise((resolve, reject) => {
    let user = new userModel(obj);
    user.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
}

module.exports = {
  getUsersDb,
  getUserDB,
  addUser,
};
