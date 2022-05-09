const express = require("express");
const router = express.Router();
const scooterModelBL = require("../models/scootersModelBL");
const scooterBl = require("../BL/scooterBL");

router.get("/", async function (req, resp) {
  let scooters = await scooterModelBL.getScootersDB();
  return resp.json(scooters);
});

router.post("/add", async function (req, resp) {
  let obj = req.body;
  console.log(obj);
  let stat = await scooterModelBL.addScooters(obj);
  return resp.json(stat);
});

router.get("/poly", async function (req, resp) {
  let polygon = req.query.polygon;
  console.log(polygon);
  let stat = await scooterBl.getScootersInPolygonArea(polygon);
  return resp.json(stat);
});

router.get("/act", async function (req, resp) {
  let activeScooters = await scooterModelBL.getActiveScooters();
  return resp.json(activeScooters);
});
module.exports = router;
