const express = require("express");
const router = express.Router();
const parkingModelBL = require("../models/parkingModelBL");
const parkingBL = require("../BL/parkingBL");

router.get("/", async function (req, resp) {
  let parking = await parkingModelBL.getParksDB();
  return resp.json(parking);
});

router.post("/add", async function (req, resp) {
  let obj = req.body;

  let stat = await parkingModelBL.addParking(obj);
  return resp.json(stat);
});

router.get("/available", async function (req, resp) {
  let stat = await parkingBL.fetchAvilablePlaces();
  return resp.json(stat);
});
module.exports = router;
