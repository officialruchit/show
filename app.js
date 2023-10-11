const express = require("express");
const app = express();
const mongoose = require("mongoose");
const model = require("./model");
const bodyparser = require("body-parser");
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
const url =
  "mongodb+srv://testing:test@atlascluster.ij20tlj.mongodb.net/mobile?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connect");
  })
  .catch(() => {
    console.log("err");
  });
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.send(__dirname + "/index.js");
});
app.get("/data", async (req, res) => {
  res.json(await model.find());
});
app.post("/data", async (req, res) => {
  const { name, brand, image, price, storage, quanity } = req.body;

  const data = new model({
    name,
    brand,
    image,
    price,
    storage,
    quanity,
  });
  data.save();
  res.send(await model.find());
});
app.delete("/data/:id", async (req, res) => {
  const data = await model.findByIdAndDelete(req.params.id);
  res.send(await model.find());
});
app.listen(4444, () => {
  console.log("done");
});
