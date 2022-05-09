const scooterModelBL = require("../models/scootersModelBL");
async function getScootersInPolygonArea(polygon) {
  let scooters = await scooterModelBL.getScootersDB();
  let filteredScooters = scooters.filter(function checkIfPolygon() {
    const x = scooters.lat;
    const y = scooters.lon;
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i][0];
      const yi = polygon[i][1];
      const xj = polygon[j][0];
      const yj = polygon[j][1];

      const intersect =
        yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  });

  return filteredScooters;
}

module.exports = {
  getScootersInPolygonArea,
};
