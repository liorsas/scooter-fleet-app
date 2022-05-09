const mongoose = require("mongoose");
const dbUri =
  // process.env.DEV_MODE === "false"
  // "mongodb://localhost:27017/scootersDB";

  "mongodb+srv://liorsas:Nati0307@scooterclus.b6s2z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(process.env.MONGO_URI || dbUri)
  .then((x) => console.log("succesful connected" + " " + dbUri))
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });
