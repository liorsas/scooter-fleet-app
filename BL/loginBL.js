const usersModelBL = require("../models/usersModelBL");
async function authCheck(obj) {
  let usersArr = await usersModelBL.getUsersDb();
  let validUser = usersArr.find(
    (el) => el.username == obj.username && el.passward == obj.passward
  );

  if (validUser) {
    return validUser;
  } else {
    return false;
  }
}

module.exports = {
  authCheck,
};
