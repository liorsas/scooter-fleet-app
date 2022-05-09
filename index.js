const usersRouter = require("./routes/usersRouter");
const scootersRouter = require("./routes/scootersRouter");
const parkingRouter = require("./routes/parksRouter");
const failuresRouter = require("./routes/failuresRouter");
const path = require("path");
require("dotenv").config({ path: "/config.env" });

const express = require("express");

var cors = require("cors");

let app = express();
require("./configs/database");
app.use(cors());

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/scooters", scootersRouter);
app.use("/api/park", parkingRouter);
app.use("/api/fail", failuresRouter);

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join((__dirname, "client/build"))));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api running");
  });
}

app.listen(3001, () => {
  console.log(`Node listens at port ${PORT}`);
});
