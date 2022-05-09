const parkingModelBL = require("../models/parkingModelBL");
const scooterModelBL = require("../models/scootersModelBL");
async function fetchAvilablePlaces() {
  let availableP = [];

  let parking = await parkingModelBL.getParksDB();

  for (let i = 0; i < parking.length; i++) {
    let parkObj = {};
    parkObj.id = parking[i]._id;
    parkObj.capacity = parking[i].capacity;
    parkObj.captured = await scooterModelBL.getScooterParkByLocation(
      parking[i].currLocation.lat,
      parking[i].currLocation.lon
    );

    availableP.push(parkObj);
  }

  let finalArr = availableP.map((el) => ({
    id: el.id,
    available: el.capacity - el.captured.length,
  }));

  return finalArr;
}

module.exports = { fetchAvilablePlaces };
