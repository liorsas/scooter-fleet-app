const failuresModlBL = require("../models/failuresModlBL");
const scooterModelBL = require("../models/scootersModelBL");

async function fetchScootersFailure() {
  let scootersArray = [];

  let scooters = await scooterModelBL.getScootersDB();

  // let arr = scooters
  //   .reduce(async (acc, curr) => {
  //     let scoot = {};
  //     scoot.model = curr.model;
  //     scoot.year = curr.year;
  //     scoot.fail = await failuresModlBL.getFailureByScooterId(curr._id);

  //     console.log(acc);

  //     acc.push(scoot);
  //     return acc;
  //   }, [])
  //   .then((x) => console.log(x));

  for (let i = 0; i < scooters.length; i++) {
    let scoot = {};
    scoot.id = scooters[i]._id;
    scoot.model = scooters[i].model;
    scoot.year = scooters[i].year;
    scoot.failures = await failuresModlBL.getFailureByScooterId(
      scooters[i]._id
    );

    scootersArray.push(scoot);
  }

  let filteredScooters = scootersArray.filter((el) => el.failures > 0);

  return scootersArray;

  //   return scootersArray;

  // let arr = scooters.map(async (el) => ({
  //   model: el.model,
  //   year: el.year,
  //   fail: await failuresModlBL.getFailureByScooterId(el._id),
  // }));
  // return arr;
}

module.exports = { fetchScootersFailure };
