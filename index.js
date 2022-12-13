require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;
const mongodb = require("./src/db/connect");
const bodyParser = require("body-parser");

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./src/routes"));

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(PORT);
      console.log(`Connected to port => ${PORT}`);
    }
  });