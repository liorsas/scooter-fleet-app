const express = require("express");
const router = express.Router();

const failursModelBL = require("../models/failuresModlBL");
const failureBL = require("../BL/failureBL");

router.get("/", async function (req, resp) {
  let failures = await failureBL.fetchScootersFailure();
  return resp.json(failures);
});

router.post("/add", async function (req, resp) {
  let obj = req.body;
  console.log(obj);
  let stat = await failursModelBL.addFailure(obj);
  return resp.json(stat);
});
module.exports = router;
