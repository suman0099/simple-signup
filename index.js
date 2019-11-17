const express = require("express");
const app = express();
const router = require("./routes/index");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to Database"))
  .catch(err => console.error(err));

//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
