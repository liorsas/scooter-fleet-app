const express = require("express");
const loginBL = require("../BL/loginBL");
const userModelBL = require("../models/usersModelBL");

const router = express.Router();

router.get("/", async function (req, resp) {
  let users = await userModelBL.getUsersDb();
  return resp.json(users);
});

router.route("/log").post(async function (req, resp) {
  let obj = req.body;

  let validUser = await loginBL.authCheck(obj);
  return resp.json(validUser);
});

router.post("/add", async function (req, resp) {
  let obj = req.body;
  console.log(obj);
  let stat = await userModelBL.addUser(obj);
  return resp.json(stat);
});

module.exports = router;
